import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Datatable = (props) => {
  const [dataVehicule, setDataVehicule] = useState({
    modele: '',
    marque: '',
    image: '',
  });

  //const [test, setTest] = useState("")
  const history = useHistory();
  console.log(props);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.reload();
    //history.push('/delivery');
    axios.delete(`/vehicules/${props.vk._id}`).then((res) => {
      console.log(res);

      setDataVehicule(res.data.data);
      console.log(res.data);
    });
  };

  return (
    <tr>
      <td>
        <a href={`/vehicules/${props.vk._id}`}>{props.vk.modele}</a>
      </td>
      <td>{props.vk.marque}</td>
      <td>
        <img
          src={`/${props.vk.image}`}
          alt={props.vk.image}
          width="200"
          height="200"
        />
      </td>

      <td>
        <a className="btn btn-warning" href={`/edit/${props.vk._id}`}>
          <i className="fas fa-edit"></i>&nbsp;Edit
        </a>
        &nbsp;
        <a className="btn btn-danger" href="#" onClick={handleSubmit}>
          <i className="fas fa-times-circle"></i> Delete
        </a>
        <a className="btn btn-warning" href={`/details/${props.vk._id}`}>
          <i className="fas fa-edit"></i>&nbsp;Details
        </a>
      </td>
    </tr>
  );
};

export default Datatable;
