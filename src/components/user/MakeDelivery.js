import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserfind, selectConnectuser } from '../../redux/slices/userSlice';
import Classmakedelivery from './Classmakedelivery';
import { fetchWeather } from './fetchWeather';
import '../../styles/user/fetchWeather.css';
export default function MakeDelivery(props) {
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

  // const [query, setQuery] = useState('');
  // const [weather, setWeather] = useState({});

  // const search = async (e) => {
  //   if (e.key === 'Enter') {
  //     const data = await fetchWeather(query);

  //     setWeather(data);
  //     setQuery('');
  //   }
  // };

  return (
    <div style={{ height: '700px' }}>
      <h1>Make Delivery</h1>
      <Classmakedelivery con={connectUser} />
      {/* <div className="main-container">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
