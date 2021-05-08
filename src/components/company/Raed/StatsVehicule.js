import React, { Component } from 'react';
import axios from 'axios';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts';
class StatsVehicule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicules: [],
      raed: 0,
      fahed: 0,
    };
  }

  componentDidMount() {
    this.getVehicules();
  }

  getVehicules() {
    axios.get('/statsvehicules').then((res) => {
      console.log(res.data);
      this.setState({
        vehicules: res.data.data,
      });
      console.log('vehicules: ', this.state.vehicules);
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Socail Media Users</h1>
        <div className="App">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="count"
              isAnimationActive={false}
              data={this.state.vehicules}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
          <BarChart
            width={500}
            height={300}
            data={this.state.vehicules}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="_id"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </div>
      </div>
    );
  }
}

export default StatsVehicule;
