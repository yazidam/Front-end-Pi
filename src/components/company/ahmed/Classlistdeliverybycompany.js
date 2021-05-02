import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../../.././App.css';
import {
  loginUserfind,
  selectConnectuser,
} from '../../../redux/slices/userSlice';
export default function Classlistdeliverybycompany(props) {
  const [studentState, setStudentState] = useState([]);
  const [Raed, setRaed] = useState([]);
  const [connectUser, error] = useSelector(selectConnectuser);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (Cookies.get('connect.sid')) {
    } else {
      await axios
        .get('http://localhost:5000/auth/logout', { withCredentials: true })
        .then((res) => {
          console.log(res);
          localStorage.removeItem('userInfo');
          dispatch(loginUserfind(res.data));
          props.history.push('/');
        });
    }
  }, [Cookies.get()]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/delivery/listdeliverybycompany/${connectUser.id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // setStudentState(res.data.data);
        setStudentState(
          res.data.data.map((vk) => {
            return {
              select: false,
              id: vk._id,
              username: vk.username,
              email: vk.email,
              adresse: vk.adresse,
              phone: vk.phone,
              description: vk.description,
              from: vk.from,
              to: vk.to,
            };
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const history = useHistory();

  const AjoutLivreur = () => {
    let array = [];
    studentState.forEach((vk) => {
      studentState.map((data) => {
        if (vk.id == data.id) {
          if (vk.select) {
            array.push(data);
          }
        }
      });
    });

    let checkData = {
      checkbox: JSON.stringify(array),
    };
    console.log(array);
    //console.log(checkData)
    axios
      .post('http://localhost:5000/circuit/add', array, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        console.log(array);

        // history.push(/homeuser/company/deliverymanagementbyadmincompany/${res.data.data._id},{array:array})
        history.push({
          pathname: `/homeuser/company/deliverymanagementbyadmincompany/${res.data.data._id}`,
          search: '',
          state: { detail: array },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ///////////delete function///////////////////
  const handleSubmit = (_id) => {
    console.log(_id);
    history.push('/delivery');
    axios
      .delete(
        `http://localhost:5000/delivery/passdelivery/${_id}`,

        { withCredentials: true }
      )
      .then((res) => {
        console.log('data: ', res);

        setStudentState(res.data.data);
        console.log(res.data);
      });
    window.location.reload();
    console.log('ahmedd ', props.vk);
  };

  return (
    <div className="container" style={{ height: '700px' }}>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2"></div>
        <div className="col-lg-3 mt-2 mb-2"></div>
      </div>
      <table className="  table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox"></input>
            </th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">adresse</th>
            <th scope="col">phone</th>
            <th scope="col">description</th>
            <th scope="col">from</th>
            <th scope="col">to</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {studentState.map((vk, i) => (
            <tr key={vk.id}>
              <th scope="row">
                <input
                  onChange={(event) => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map((data) => {
                        if (vk.id == data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={vk.select}
                ></input>
              </th>

              <td>
                <td>{vk.username}</td>
              </td>
              <td>{vk.email}</td>
              <td>{vk.adresse}</td>
              <td>{vk.phone}</td>
              <td>{vk.description}</td>
              <td>{vk.from}</td>
              <td>{vk.to}</td>
              <td>
                {' '}
                {/* <span
                  className="icon"
                  onClick={() => {
                    handleSubmit(vk._id);
                  }}
                >
                  <i className="fa fa-trash" style={{ color: 'red' }}></i>
                </span> */}
                {/* <a
                  className="btn btn-primary my-2"
                  onClick={() => {
                    handleSubmit(vk._id);
                  }}
                >
                  Done
                </a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="btn btn-warning mx-3"
        onClick={() => {
          AjoutLivreur();
        }}
      >
        <i className="fas fa-edit"></i> manipulate
      </button>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      ></div>
    </div>
  );
}
