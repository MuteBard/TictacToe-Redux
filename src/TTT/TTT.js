import React from 'react';
import * as actions from './TTT.actions'
import * as ReactRedux from 'react-redux';

class TTT extends React.Component {
  render(){
    let board = [0,1,2,3,4,5,6,7,8];
    return (
      <div>
        <div className="scoreBoard"><div className="owins">O wins: {this.props.owins}</div><div className="xwins">X wins: {this.props.xwins}</div></div>
        <div className="board">
          {board.map(idx => {
            return (
                <div
                  key={idx}
                  onClick={() => {this.props.select(idx)}}
                  className={(this.props.board[idx] != null ? (this.props.board[idx] === "X" ? "cell blue" : "cell purple") : "cell") + (this.props.winningCells.indexOf(idx) !== -1 ? " blink" : "")}>
                  {this.props.board[idx]}
                </div>
            )
          })}
          <div className="cont1">
            <div className="message">{this.props.message}</div>
          </div>
          <div className="cont2">
            {this.props.gameOver === true ? <div className="restart "><button className="btn btn-primary" onClick={this.props.restart}>Play Again</button></div>:null}
          </div>
        </div>
      </div>
    );
  }
}
const TTTContainer = ReactRedux.connect(
  state => state.TicTacToe,
  actions
)(TTT);

export default TTTContainer
