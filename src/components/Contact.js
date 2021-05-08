import { useState, useRef } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import positionEsprit from '../assets/espritposition.jpg';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import Leaft from './espritposition/leaft';

export default function Contact(props) {
  //   const [position , setPosition] = useState({lat : 36.8978418 , lng : 10.1876042});
  //   const [isMapInit, setIsMapInit] = useState(false);
  // const [map, setMap] = useState("");
  const [contact, setContact] = useState({
    email: 'wecodeesprit@gmail.com',
    emailsend: '',
    subject: '',
    message: '',
  });

  const handleContact = async () => {
    axios.post('/mail', contact, { withCredentials: true }).then((res) => {
      console.log(res.status);
      console.log(res);
      if (res.status === 203) {
        alert(res.data);
      }
      if (res.status === 200) {
        props.history.push('/homeuser');
      }
    });

    setContact({
      email: 'wecodeesprit@gmail.com',
      emailsend: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    //setUser({ ...user, [e.target.name]: e.target.value });
    setContact({ ...contact, [e.target.name]: e.target.value });
    //setPassword(e.target.value.password)
    console.log(contact);
  };

  // const saveMap = (map) => {
  //   setMap(map);
  //   setIsMapInit(true);
  // };

  const mapRef = useRef();
  return (
    <>
      <section className="Form my-4 mx-5" id="seccontact">
        <div className="container">
          <div className="row no-gutters" id="rowcontact">
            <div className="col-lg-5">
              <img
                src={positionEsprit}
                className="img-fluid"
                alt="contactimg"
                id="imgpositionEsprit"
              />
              {/* <Map center={[36.8978418,10.1876042]} zoom={9} ref={mapRef} style={{width:"200px", height:"400px"}}>
              <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"         
              />
              <Marker position={[36.8978418,10.1876042]}>
                <Popup>Smart Delivery</Popup>
              </Marker>
            </Map> */}
            </div>
            <div className="col-lg-7 px-5 py-5">
              <h1 className="font-weight-bold py-3">WeCode</h1>
              <h4>Contact Form</h4>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control my-3 p-4"
                      name="emailsend"
                      value={contact.emailsend}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control my-3 p-4"
                      name="subject"
                      value={contact.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <textarea
                      className="form-control my-3 p-4"
                      placeholder="Your Message"
                      name="message"
                      value={contact.message}
                      rows="3"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button
                      type="button"
                      className="btn1"
                      id="btncontact"
                      onClick={handleContact}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
