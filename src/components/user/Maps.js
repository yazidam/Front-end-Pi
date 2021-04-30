import React, { Component } from 'react';
import L from 'leaflet';
//import '../App.css';
//import './aa';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
export default class Maps extends Component {
  constructor() {
    super();
    this.state = {
      longitude: '335848',
      latitude: '93224',
      locationAccuracy: '',
    };
  }
  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24,
    };
    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    );
  }
  geoSuccess = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    this.setState({
      ready: true,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    console.log('latitude:' + this.state.lat);
    console.log('longitude:' + this.state.lng);
  };
  geoFailure = (err) => {
    this.setState({ error: err.message });
  };
  render() {
    const DEFUALT_longitude = 36.806389;
    const DEFAULT_LATITUDE = 10.181667;
    const grenIcon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [-3, -76],
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      shadowSize: null,
      shadowAnchor: null,
      className: 'custom-icon',
      // specify the path here
      iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png',
    });
    return (
      <>
        <input
          type="text"
          name="start"
          class="input"
          id="start"
          placeholder="Choose starting point"
        />
        <input
          type="text"
          name="end"
          class="input"
          id="destination"
          placeholder="Choose starting point"
        />
        <button type="submit">Get Directions</button>
        <div className="boxcontainer">
          {this.state.lng != null && this.state.lat != null && (
            <Map
              style={{ width: '100%', height: '80vh' }}
              center={[this.state.lat, this.state.lng]}
              zoom={13}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[this.state.lat, this.state.lng]}
                icon={grenIcon}
              >
                <Popup>You are here </Popup>
              </Marker>
            </Map>
          )}
        </div>
      </>
    );
  }
}
