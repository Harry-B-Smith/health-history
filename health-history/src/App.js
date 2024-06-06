import React, { Component } from 'react';

import './App.css';
import * as apiresult from './res.json'
import Chart from './components/Chart'

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData() {

    this.setState({
      chartData: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets:[
          {
            label: 'Triglycerides',
            data:[
                  150,
                  200,
                  125,
                  100,
                  90,
                  75
                ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }       

        ],
        
      }
    })

  }

  render() {
    let res = apiresult;
    return (
      <div>       
       Hello {res.name}
         <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
