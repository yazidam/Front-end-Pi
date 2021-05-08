// import { useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUserfind, selectConnectuser } from '../../redux/slices/userSlice';
// import Maps from './Maps';

// export default function VehicleShot(props) {
//   const [connectUser, error] = useSelector(selectConnectuser);
//   const dispatch = useDispatch();

//   useEffect(async () => {
//     if (Cookies.get('connect.sid')) {
//     } else {
//       await axios
//         .get('/auth/logout', { withCredentials: true })
//         .then((res) => {
//           console.log(res);
//           localStorage.removeItem('userInfo');
//           dispatch(loginUserfind(res.data));
//           props.history.push('/');
//         });
//     }
//   }, [Cookies.get(), dispatch]);

//   return (
//     <div style={{ height: '700px' }}>
//       <h1>I'm vehicle Tour</h1>
//       <Maps />
//     </div>
//   );
// }

import React, { useEffect } from 'react';
function VehicleShot(props) {
  const mapStyle = {
    height: props.height,
    width: props.width,
  };

  useEffect(() => {
    const leaflet = window.L;

    leaflet.mapquest.key = props.apiKey;

    const baseLayer = leaflet.mapquest.tileLayer('map');

    const mapInstance = leaflet.mapquest.map('map', {
      center: props.center,
      layers: baseLayer,
      zoom: props.zoom,
      pitch: props.pitch,
      bearing: props.bearing,
    });

    mapInstance.addControl(leaflet.mapquest.control());

    leaflet.control
      .layers({
        Map: baseLayer,
        Hybrid: leaflet.mapquest.tileLayer('hybrid'),
        Satellite: leaflet.mapquest.tileLayer('satellite'),
        Light: leaflet.mapquest.tileLayer('light'),
        Dark: leaflet.mapquest.tileLayer('dark'),
      })
      .addTo(mapInstance);

    leaflet.mapquest.directions().route({
      start: 'tunis',
      end: 'tozeur',
      waypoints: [
        { lat: 35.82903, lng: 10.63778 },
        'monastir',
        'moknine',
        'tozeur',
      ],
      optimizeWaypoints: true,
    });
  }, []);
  return (
    <div id="map" style={mapStyle}>
      <p style={{ textAlign: 'center' }}>Map loading...</p>
    </div>
  );
}

export default VehicleShot;
