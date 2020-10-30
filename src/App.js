import React, { Component } from 'react';
import Question from './Question';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import trivia from './Apprentice_TandemFor400_Data.json';

class App extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <Question trivia={trivia} />
      </div>
    );
  }
}

export default App;
