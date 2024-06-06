import React, { Component } from 'react';

import './App.css';
import Chart from './components/Chart'

const apiresult = require('./res.json');
const data = JSON.parse(JSON.stringify(apiresult));

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: { labels: [], datasets: [] }
    };
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData() {
    
    this.setState({
      chartData: {
        labels: data.map(item => item.date_of_test),
        datasets:[
          {
            label: 'Total Cholesterol',
            data: data.map(item => item.total_cholesterol),
            backgroundColor: [],
            fill: false,
            borderColor: '#ff0000'
          },
          {
            label: 'Triglycerides',
            data: data.map(item => item.triglycerides),
            backgroundColor: [],
            fill: false,
            borderColor: '#800080'
          },
          {
            label: 'HDL',
            data: data.map(item => item.hdl),
            backgroundColor: [],
            fill: false,
            borderColor: '#008000'
          },
          {
            label: 'LDL',
            data: data.map(item => item.ldl),
            backgroundColor: [],
            fill: false,
            borderColor: '#0000ff'
          }
        ]
      }
    });
}

  render() {
    return (
      <div>       
       Hello {apiresult[0].name}
         <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
