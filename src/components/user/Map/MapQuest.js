import React, { Component, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function MapQuest(props) {
  const [raed, setRaed] = useState(props.Raed);
  const [ahmed, setAhmed] = useState(props.Ahmed);
  const location = useLocation();

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
      start: location.state.detail2,
      //end: 'tozeur',
      waypoints: ([
        //{ lat: 35.82903, lng: 10.63778 },
        //'tunis',
        // 'moknine',
        // 'tozeur',
      ] = location.state.detail),
      optimizeWaypoints: true,
    });
    console.log(location.state.detail);

    console.log(location.state.detail2);
  }, []);
  // useEffect(() => {
  //   setRaed(props.Raed);
  //   setAhmed(props.Ahmed);
  //   console.log('tt', props.Raed);
  //   console.log('tt2', props.Ahmed);
  //   let tab = [];
  //   window.setTimeout(() => {
  //     for (var i = 0; i < props.Count; i++) {
  //       tab.push([
  //         // 'a',
  //         // 'b',
  //         [props.Raed[i].lat, props.Raed[i].lng],
  //         [props.Ahmed[i].lat, props.Ahmed[i].lng],
  //       ]);
  //     }
  //   }, 1000);

  //   // let tab3 = [];
  //   // for (var i = 0; i < props.Count; i++) {
  //   //   window.setTimeout(() => {
  //   //     tab3.push([
  //   //       [props.Ahmed[i].lat, props.Ahmed[i].lng],
  //   //       // [props.Ahmed[i].lat, props.Ahmed[i].lng],
  //   //     ]);
  //   //   });
  //   // }

  //   //console.log('taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab3', tab3);
  //   console.log('proppp', props);
  //   console.log('taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', tab);
  // }, [props.Raed, props.Ahmed]);

  // useEffect(() => {
  //   //setRaed(props.Raed);
  //   setAhmed(props.Ahmed);
  //   //console.log('tt', props.Raed);
  //   console.log('tt2', props.Ahmed);
  //   let tab3 = [];
  //   for (var i = 0; i < props.Count; i++) {
  //     tab3.push([
  //       [props.Ahmed[i].lat, props.Ahmed[i].lng],
  //       // [props.Ahmed[i].lat, props.Ahmed[i].lng],
  //     ]);
  //   }

  //   console.log(
  //     'taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabA777',
  //     tab3
  //   );
  //   // console.log('proppp', props);
  // }, [props.Ahmed]);

  // componentDidUpdate(prevProps, prevState) {
  // console.log('list de Raaaaaaaaaed', props.Raed);
  // console.log('list de Ahmeeeeeed', props.Ahmed);
  // console.log('Raed Map From', props.Raed);
  // // console.log('tabbbbbbbbbbbbbbbbbbbbbbbb', props.tab);
  // //console.log('tabbbbbbbbbbbbbbbbbbbbbbbb', props.tab);
  // console.log(
  //   'taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2',
  //   props.Count
  // );

  // }
  const mapStyle = {
    height: props.height,
    width: props.width,
  };
  return (
    <div id="map" style={mapStyle}>
      {/* <Marker position={[36.805809, 10.08853]}>
        <Popup>You are to !! </Popup>
      </Marker> */}
      <p style={{ textAlign: 'center' }}>Map loading...</p>
    </div>
  );
}

export default MapQuest;
