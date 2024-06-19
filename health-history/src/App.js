import React, { Component } from 'react';

import './App.css';
import Chart from './components/Chart'
import ChartComponent from './components/ChartComponent';

const apiresult = require('./res.json');

class App extends Component {

  render() {
    return (
      <div>       
       Hello {apiresult[0].name}
         <ChartComponent/>
      </div>
    );
  }
  
}

export default App;
