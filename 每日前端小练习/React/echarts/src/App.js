import React, { Component } from 'react';
import './App.css';
import Bar from './Bar';
import Line from './Line';
import Pie from './Pie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar/>
        <Pie/>
        <Line/>
      </div>
    );
  }
}

export default App;