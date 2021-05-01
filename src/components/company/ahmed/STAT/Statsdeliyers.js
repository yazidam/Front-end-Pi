// import React, { Component } from 'react';
// //import { Bar, Line, Pie } from 'react-chartjs-2';
// import axios from 'axios';
// import {
//   PieChart,
//   Pie,
//   Tooltip,
//   BarChart,
//   XAxis,
//   YAxis,
//   Legend,
//   CartesianGrid,
//   Bar,
// } from 'recharts';
// export default class Statsdeliyers extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tabstat: [],
//       a: 0,
//       b: 0,
//     };
//   }

//   componentDidMount() {
//     this.getVehicules();
//   }

//   getVehicules() {
//     axios
//       .get('http://localhost:5000/delivery/stat_all_deliverys', {
//  withCredentials: true,
//       })
//       .then((res) => {
//         console.log(res.data);
//         this.setState({
//           tabstat: res.data.data,
//         });
//         console.log('tabstat: ', this.state.tabstat);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h1>stattttttttttttttttttttttttttttttttttttttt</h1>
//         <div style={{ textAlign: 'center' }}>
//           <h1>Socail Media Users</h1>
//           <div className="App">
//             <PieChart width={400} height={400}>
//               <Pie
//                 dataKey="count"
//                 isAnimationActive={false}
//                 data={this.state.tabstat}
//                 cx={200}
//                 cy={200}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 label
//               />
//               <Tooltip />
//             </PieChart>
//             <BarChart
//               width={500}
//               height={300}
//               data={this.state.tabstat}
//               margin={{
//                 top: 5,
//                 right: 30,
//                 left: 80,
//                 bottom: 5,
//               }}
//               barSize={20}
//             >
//               <XAxis
//                 dataKey="_id"
//                 scale="point"
//                 padding={{ left: 10, right: 10 }}
//               />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Bar
//                 dataKey="count"
//                 fill="#8884d8"
//                 background={{ fill: '#eee' }}
//               />
//             </BarChart>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
import axios from 'axios';
import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Statsdeliyers() {
  const [chartData, SetchartData] = useState({});
  //   const { id } = useParams();
  //   axios.defaults.headers.common['Authorization'] =
  //     'bearer ' + localStorage.getItem('Data');

  //   const [chartData, SetchartData] = useState({});

  //   var local = localStorage.getItem('Data');
  //   if (local !== 'undefined' && local !== null) {
  //     const decode = jwt_decode(local);
  //     var Username = decode.username;
  //     var iduser = decode._id;
  //     console.log('idusssserr' + iduser);
  //   } else {
  //     //  history.push("/");
  //     console.log('mat3adash');
  //     //history.push('/')
  //   }

  const chart = () => {
    let cat = [];
    let nombre = [];
    // console.log('RRRRRRRRRRRR' + iduser);
    axios
      .get('http://localhost:5000/delivery/stat_all_deliverys', {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          cat.push(dataObj._id);
          nombre.push(dataObj.count);
        }

        SetchartData({
          labels: cat,

          datasets: [
            {
              label: 'Users',
              data: nombre,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(cat);
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <div className="chart">
        <Bar data={chartData} options={{}} />
      </div>
    </div>
  );
}

export default Statsdeliyers;
