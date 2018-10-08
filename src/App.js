import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    
    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count -1
      };

    default:
      return state;
  }
  
}

const store  = createStore(reducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}


export default App;
