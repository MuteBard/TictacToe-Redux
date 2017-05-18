import React from 'react';
import * as actions from './TTT.actions'
import * as ReactRedux from 'react-redux';

class TTT extends React.Component {
  render(){
    let board = [0,1,2,3,4,5,6,7,8];
    return (
      <div>
        <div className="scoreBoard"><div className="owins">O wins: {this.props.gameState.owins}</div><div className="xwins">X wins: {this.props.gameState.xwins}</div></div>
        <div className="board">
          {board.map(idx => {

            return (
            <div>
              <div
                key={idx} onClick={() => {this.props.select(idx)}}
                className={(this.props.gameState.board[idx] != null ? (this.props.gameState.board[idx] === "X" ? "cell blue" : "cell purple") : "cell") + (this.props.gameState.winningCells.indexOf(idx) !== -1 ? " blink" : "")}>
                {this.props.gameState.board[0]}
              </div>
            </div>
          )
          })}
            <div className="cont1">
              <div className="message">{this.props.gameState.message}</div>
            </div>
            <div className="cont2">
              {this.props.gameState.gameOver === true ? <div className="restart "><button  onClick={this.props.restart}>Play Again</button></div>:null}
            </div>
          </div>
        </div>
    )
  }
}
const TTTContainer = ReactRedux.connect(
  state => state.TicTacToe,
  actions
)(TTT);

export default TTTContainer
// className="btn btn-primary"
