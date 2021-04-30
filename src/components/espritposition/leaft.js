import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default function Leaft() {
  const position = [36.8978418, 10.1876042];
  return (
    <>
      <Map center={position} zoom="13">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Smart Delivery</Popup>
        </Marker>
      </Map>
    </>
  );
}
