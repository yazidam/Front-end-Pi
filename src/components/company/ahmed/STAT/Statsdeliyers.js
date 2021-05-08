import axios from 'axios';
import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
//import { useHistory, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUserfind,
  selectConnectuser,
} from '../../../../redux/slices/userSlice';

function Statsdeliyers(props) {
  const [chartData, SetchartData] = useState({});
  const [connectUser, error] = useSelector(selectConnectuser);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (Cookies.get('connect.sid')) {
    } else {
      await axios.get('/auth/logout', { withCredentials: true }).then((res) => {
        console.log(res);
        localStorage.removeItem('userInfo');
        dispatch(loginUserfind(res.data));
        props.history.push('/');
      });
    }
  }, [Cookies.get()]);

  const chart = () => {
    let cat = [];
    let nombre = [];

    axios
      .get('/delivery/stat_all_deliverys', {
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
