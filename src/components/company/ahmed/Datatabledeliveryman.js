import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

//import '../style/Datatable.css';
const Datatable = (props) => {
  const [datalivreur, setDatalivreur] = useState({
    id: '',
    username: '',
    email: '',
    adresse: '',
    phone: '',
  });

  //const [test, setTest] = useState("")
  const history = useHistory();
  console.log('this is prorps', props);

  const handleSubmit = (event) => {
    // //event.preventDefault();

    // //history.push('/delivery');
    axios
      .delete(
        `/livreur/users/deliveryman/${props.vk._id}`,

        { withCredentials: true }
      )
      .then((res) => {
        console.log('data: ', res);

        setDatalivreur(res.data.data);
        console.log(res.data);
      });
    window.location.reload();
    console.log('ahmedd ', props.vk);
  };

  return (
    <>
      <div className="  ">
        <div
          className="colllll  "
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <div className="card h-90 mx-3">
            <div className="card-body ">
              <h5 className="card-title">
                username :
                <Link
                  className="name2"
                  to={`/homeuser/company/details/${props.vk._id}`}
                >
                  {' '}
                  {props.vk.username}
                </Link>
              </h5>
              <h5 className="card-title">email : {props.vk.email}</h5>
              <h5 className="card-title">adresse : {props.vk.adresse}</h5>
              <h5 className="card-title">phone : {props.vk.phone}</h5>
            </div>
            <div className="card-footer">
              <a className="btn btn-danger" href="#" onClick={handleSubmit}>
                <i className="fas fa-times-circle"></i> Delete
              </a>
              <Link
                className="btn btn-warning mx-3"
                to={`/homeuser/company/edit/${props.vk._id}`}
              >
                <i className="fas fa-edit"></i> Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <Link to="/addlivreeur" className="bot btn btn-secondary my-5">
          Add
        </Link>
      </div> */}
      {/* <Add hah={this.state.jj} /> */}
    </>
  );
};

export default Datatable;
