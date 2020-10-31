import React, { Component } from 'react';
import Question from './Question';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <Question />
      </div>
    );
  }
}

export default App;
