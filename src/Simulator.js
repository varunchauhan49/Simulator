import React, { Component } from 'react';
import Board from './Board';
import UserInput from './UserInput';
import {Row,Col,Jumbotron} from 'reactstrap';

/*
Simulator class is main entry point for Robot Simulation module.
*/
class Simulator extends Component{
  constructor(props){
    super();
    this.state = {
      stepX:-1,
      stepY:-1,
      stepFace:''
    };
  }
  handleAction(x,y,face){
    this.setState({
      stepX:x,
      stepY:y,
      stepFace:face
    })
  }
  render(){
    let {stepX,stepY,stepFace} = this.state;
    return(
      <Row>
        <Col xs="5">
          <Row style={{padding:'0px 0px 20px 20px',marginBottom:'5vh'}}>
            <Jumbotron>
              <h3>Robot Simulator</h3>
              <p>Orientation : {stepFace}</p>
              <p>X: {stepX}</p>
              <p>Y: {stepY}</p>
              <hr className="my-2" />
              <p>A robot simulator which allows you to move robot across the board.</p>
            </Jumbotron>
          </Row>
          <Row>
            <UserInput 
              action={(x,y,face) => this.handleAction(x,y,face)}
              rows={8}
              cols={8} 
              />
          </Row>
        </Col>
        <Col xs="7">
          <Board 
            posX={stepX}
            posY={stepY}
            face={stepFace}
            rows={8}
            cols={8}
            />
        </Col>
      </Row>
    );
  }
}

export default Simulator;