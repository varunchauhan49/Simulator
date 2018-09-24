import React, { Component } from 'react';
import Board from './Board';
import UserInput from './UserInput';
import {
  Row,
  Col,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

/*
Simulator class is main entry point for Robot Simulation module.
*/
class Simulator extends Component{
  constructor(props){
    super();
    this.state = {
      stepX:-1,
      stepY:-1,
      stepFace:'',
      rows:-1,
      cols:-1,
      modal:true
    };
  }
  handleAction(x,y,face){
    this.setState({
      stepX:x,
      stepY:y,
      stepFace:face
    })
  }
  // Update board function will check the value of board
  updateBoard(){
    const {rows,cols} = this.state;
    if(rows<2 || rows>12){
      alert("Incorrect rows value. Rows value should be in range 2 to 12");
      return
    }
    if(cols<2 || cols>12){
      alert("Incorrect cols value. Column value should be in range 2 to 12");
      return
    }
    this.setState({modal:false})
  }
  render(){
    let orientCss = {
      fontWeight: '500',
      color: 'red',
      fontSize: '16px',
      marginLeft: '10px'
    }
    let {stepX,stepY,stepFace,rows,cols,modal} = this.state;
    return(
      <div>
        {
          (!modal)?
        <Row>
          <Col xs="5">
            <Row style={{padding:'0px 0px 20px 20px',marginBottom:'5vh'}}>
              <Jumbotron>
                <h3>Robot Simulator</h3>
                <p>Orientation : 
                  <span style={orientCss}>{stepFace}</span>
                </p>
                <p>X: {stepX}</p>
                <p>Y: {stepY}</p>
                <hr className="my-2" />
                <p>A robot simulator which allows you to move robot across the board.</p>
              </Jumbotron>
            </Row>
            <Row>
              <UserInput 
                action={(x,y,face) => this.handleAction(x,y,face)}
                rows={rows}
                cols={cols} 
                />
            </Row>
          </Col>
          <Col xs="7">
            <Board 
              posX={stepX}
              posY={stepY}
              face={stepFace}
              rows={rows}
              cols={cols}
              />
          </Col>
        </Row>:
        <Modal color="success"  isOpen={this.state.modal}>
          <ModalHeader>Robot Simulator Info</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Rows</Label>
              <Col sm={4}>
                <Input type="text" 
                  id="commandInput" 
                  onChange={(event) => this.setState({ rows: parseInt(event.target.value) })} 
                  placeholder="Rows..."
                   />
              </Col>
              <Label for="exampleEmail" sm={2}>Cols</Label>
              <Col sm={4}>
                <Input type="text"
                  id="commandInput" 
                  onChange={(event) => this.setState({ cols: parseInt(event.target.value) })} 
                  placeholder="Cols..."
                  />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={() => this.updateBoard()}>Update</Button>
          </ModalFooter>
        </Modal>
        }
      </div>
    );
  }
}

export default Simulator;