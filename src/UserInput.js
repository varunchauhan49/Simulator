import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*
Class to accept user input and pass final position with direction to simulator class.
*/
class UserInput extends Component {
  constructor(props) {
    super();
    this.state = {
      commandInput: '',
      x: -1,
      y: -1,
      face: '',
      modal:false,
      response:''
    };
  }

  // Function to rotate robot at an angle of 90 Degree
  rotate(rotate) {
    let { x, y, face } = this.state;
    let newFace = ''
    switch (face) {
      case 'north': {
        if (rotate === 'LEFT') {
          newFace = 'west'
        } else {
          newFace = 'east'
        }
        break;
      }
      case 'south': {
        if (rotate === 'LEFT') {
          newFace = 'east'
        } else {
          newFace = 'west'
        }
        break;
      }
      case 'east': {
        if (rotate === 'LEFT') {
          newFace = 'north'
        } else {
          newFace = 'south'
        }
        break;
      }
      case 'west': {
        if (rotate === 'LEFT') {
          newFace = 'south'
        } else {
          newFace = 'north'
        }
        break;
      }
      default: {
        this.setState({
          modal:true,
          response:'Current direction is incorrect'
        })
        return
      }
    }
    this.setState({ face: newFace });
    this.props.action(x, y, newFace);
  }

  // Function to move robot with one step in current direction
  moveRobot() {
    let { x, y, face } = this.state
    switch (face) {
      case 'north': {
        y -= 1;
        break;
      }
      case 'south': {
        y += 1;
        break;
      }
      case 'east': {
        x += 1;
        break;
      }
      case 'west': {
        x -= 1;
        break;
      }
      default: {
        this.setState({
          modal:true,
          response:"Cannot move no direction found!"
        })
        return
      }
    }
    if (this.evalCoordinates(x, y, face) === -1) {
      this.setState({
        modal:true,
        response:"Direction of robot incorrect and robot can fall"
      })
      return
    }
    this.setState({ x: x, y: y });
    this.props.action(x, y, face);
  }

  // Evaluate the new coordinates of Robot
  evalCoordinates(x, y, face) {
    let direction = ['north', 'south', 'east', 'west'];
    if (direction.indexOf(face.toLowerCase()) === -1) {
      this.setState({
        modal:true,
        response:"Direction of robot incorrect"
      })
      return -1
    } else if (x > 7 || x < 0) {
      this.setState({
        modal:true,
        response:"Value of co-ordinate X is incorrect, Robot will fall from board."
      })
      return -1
    } else if (y > 7 || y < 0) {
      this.setState({
        modal:true,
        response:"Value of co-ordinate Y is incorrect, Robot will fall from board"
      })
      return -1
    } else {
      return 0
    }
  }

  // Evaluate the command input from the user.
  handleCommand() {
    let { commandInput, face,x,y } = this.state;
    if (commandInput.substring(0, 5).toUpperCase() === 'PLACE') {
      let values;
      try {
        values = commandInput.split(' ')[1].split(',');
      }
      catch (error) {
        this.setState({
          modal:true,
          response:"Incorrect 'PLACE' command'"
        })
        return
      }
      if (values.length !== 3) {
        this.setState({
          modal:true,
          response:"Incorrect 'PLACE' command'"
        })
        return
      } else {
        let x = parseInt(values[0], 10);
        let y = parseInt(values[1], 10);
        let face = values[2];
        if (this.evalCoordinates(x, y, face) === -1) {
          return
        }
        this.setState({ x: x, y: y, face: face.toLowerCase() });
        this.props.action(x, y, face)
      }

    } else {
      if (face === '') {
        this.setState({
          modal:true,
          response:"First command shoudl be PLACE command only. \nPLACE X,Y,F(PLACE 3,3,NORTH)"
        })
        return;
      }
      switch (commandInput.toUpperCase()) {
        case 'MOVE': {
          this.moveRobot();
          break;
        }
        case 'LEFT': {
          this.rotate('LEFT');
          break;
        }
        case 'RIGHT': {
          this.rotate('RIGHT');
          break;
        }
        case 'REPORT': {
          let msg = "X: " + x + " Y : " + y + ". Orientation : " + face;
          this.setState({
            modal:true,
            response:msg
          })
          break;
        }
        default: {
          console.log('No case match')
        }
      }
    }
  }

  // Render function
  render() {
    return (
      <div style={{ width: '100%' }}>
        <FormGroup row>
          <Label for="exampleEmail" sm={3}>Command</Label>
          <Col sm={9}>
            <Input type="text" id="commandInput" onChange={(event) => this.setState({ commandInput: event.target.value })} placeholder="Command..." />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="info" id="execute" onClick={() => this.handleCommand()}>Execute</Button>
          </Col>
        </FormGroup>
        <Modal color="success"  isOpen={this.state.modal}>
          <ModalHeader>Info</ModalHeader>
          <ModalBody>
            {this.state.response}
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={() => this.setState({modal:false})}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UserInput;