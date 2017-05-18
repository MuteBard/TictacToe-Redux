// StyleSheet
import './index.css'

// Standard React/Redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

// import all components and their reducers here
import TTTContainer from './TTT/TTT';
import TTTReducer from './TTT/TTT.reducer';

const reducer = Redux.combineReducers({
  TicTacToe: TTTReducer
})

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



ReactDOM.render(
  <ReactRedux.Provider store={store}>
      <div className="boardContainer">
        <div className="title">Tic-Tac-Toe using React + Redux</div>
        <TTTContainer/>
      </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
