import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Board.css';

/*
Board class takes x,y coordinates to move robot on the board.
*/
class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: props.posX,
      y: props.posY,
      face: props.face
    }
  }
  componentWillReceiveProps(nextProps){
    let {posX,posY,face} = this.props;
    if(posX !== nextProps.posX){
      this.setState({x:nextProps.posX});
    }
    if(posY !== nextProps.posY){
      this.setState({y:nextProps.posY});
    }
    if(face !== nextProps.face){
      this.setState({face:nextProps.face});
    }
  }
  render() {
    let { x, y } = this.state;
    let rows = Array(8).fill().map((_,i) => {
      let tds = Array(8).fill().map((_,j) => {
        if(i === y && j === x){
          return(
            <td key={'td:' + i + ':' + j}>
              <i className="fas fa-chess-bishop" style={{color:'red',fontSize:'32px'}}></i>
            </td>
          )
        }
        else{
          return(<td key={'td:' + i + ':' + j}></td>)
        }
      })
      return (
        <tr key={"tr:" + i}>
          {tds}
        </tr>
      )
    });
    return (
      <div className="Board">
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

Board.propTypes = {
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  face: PropTypes.string
}

export default Board;
