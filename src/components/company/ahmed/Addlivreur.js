// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import {
//   loginUserfind,
//   selectConnectuser,
// } from '../../../redux/slices/userSlice';

// const Addlivreur = (props) => {
//   const [connectUser, error] = useSelector(selectConnectuser);
//   const dispatch = useDispatch();

//   useEffect(async () => {
//     if (Cookies.get('connect.sid')) {
//     } else {
//       await axios
//         .get('http://localhost:5000/auth/logout', { withCredentials: true })
//         .then((res) => {
//           console.log(res);
//           localStorage.removeItem('userInfo');
//           dispatch(loginUserfind(res.data));
//           props.history.push('/');
//         });
//     }
//   }, [Cookies.get()]);

//   const [datalivreur, setDatalivreur] = useState({
//     username: '',
//     email: '',
//     adresse: '',
//     phone: '',
//     id_company: '',
//   });
//   const history = useHistory();
//   const submit = (e) => {
//     //history.push('/delivery');
//     e.preventDefault();
//     axios
//       .post(
//         'http://localhost:5000/auth/register',
//         { withCredentials: true },
//         datalivreur
//       )
//       .then((res) => {
//         console.log(res.data);
//       });
//     // this.props.history.push('/delivery');
//   };
//   function handle(e) {
//     const newdata = { ...datalivreur };
//     newdata[e.target.id] = e.target.value;
//     setDatalivreur(newdata);
//   }

//   return (
//     <div>
//       <form onSubmit={(e) => submit(e)}>
//         <div className="form-group">
//           <label>username</label>
//           <input
//             type="text"
//             className="form-control"
//             name="username"
//             placeholder="Enter username"
//             id="username"
//             onChange={(e) => handle(e)}
//             value={datalivreur.username}
//           />
//           {/* {errors.first_name && (
//             <div className="text-danger">{this.state.errors.first_name}</div>
//           )} */}
//         </div>

//         <div className="form-group">
//           <label>email</label>
//           <input
//             type="text"
//             className="form-control"
//             name="email"
//             placeholder="Enter email"
//             id="email"
//             onChange={(e) => handle(e)}
//             value={datalivreur.email}
//           />
//           {/* {this.state.errors.last_name && (
//             <div className="text-danger">{this.state.errors.last_name}</div>
//           )} */}
//         </div>
//         <div className="form-group">
//           <label>password</label>
//           <input
//             type="text"
//             className="form-control"
//             name="password"
//             placeholder="Enter password"
//             id="password"
//             onChange={(e) => handle(e)}
//             value={datalivreur.password}
//           />
//           {/* {this.state.errors.password && (
//             <div className="text-danger">{this.state.errors.password}</div>
//           )} */}
//         </div>

//         <div className="form-group">
//           <label>adresse</label>
//           <input
//             type="text"
//             className="form-control"
//             name="adresse"
//             placeholder="Enter adresse"
//             id="adresse"
//             onChange={(e) => handle(e)}
//             value={datalivreur.adresse}
//           />
//           {/* {this.state.errors.phone && (
//             <div className="text-danger">{this.state.errors.phone}</div>
//           )} */}
//         </div>

//         <div className="form-group">
//           <label>phone</label>
//           <input
//             type="text"
//             className="form-control"
//             name="phone"
//             placeholder="Enter phone"
//             id="phone"
//             onChange={(e) => handle(e)}
//             value={datalivreur.phone}
//           />
//           {/* {this.state.errors.cin && (
//             <div className="text-danger">{this.state.errors.cin}</div>
//           )} */}
//         </div>
//         <div className="form-group">
//           <label>role</label>
//           <input
//             type="text"
//             className="form-control"
//             name="role"
//             placeholder="Enter role"
//             id="role"
//             onChange={(e) => handle(e)}
//             value={datalivreur.role}
//           />
//           {/* {this.state.errors.availability && (
//             <div className="text-danger">{this.state.errors.availability}</div>
//           )} */}
//         </div>
//         <div className="form-group">
//           <label>id_company</label>
//           <input
//             type="text"
//             className="form-control"
//             name="id_company"
//             placeholder="Enter id_company"
//             id="id_company"
//             //onChange={(e) => handle(e)}
//             value={connectUser.id}
//           />
//           {/* {this.state.errors.availability && (
//             <div className="text-danger">{this.state.errors.availability}</div>
//           )} */}
//         </div>

//         {/* <a href="/" className="btn btn-success" onClick={this.onSubmit}>
//             &nbsp;Submit
//           </a> */}
//         <button
//           className="btn btn-success"
//           type="submit"
//           // onClick={() => this.props.history.push('/delivery')}
//         >
//           <i className="far fa-check-square"></i>
//           &nbsp;Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Addlivreur;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  loginUserfind,
  selectConnectuser,
} from '../../../redux/slices/userSlice';

const Addlivreur = (props) => {
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

  const [user, setUser] = useState({
    username: '',
    email: '',
    adresse: '',
    phone: '',
    role: '',
    id_company: connectUser.id,
  });
  const history = useHistory();
  // const submit = (e) => {
  //   //history.push('/delivery');
  //   e.preventDefault();
  //   axios
  //     .post(
  //       'http://localhost:5000/auth/register',
  //       { withCredentials: true },
  //       user
  //     )
  //     .then((res) => {
  //       console.log(user);
  //     });
  //   // this.props.history.push('/delivery');
  // };
  function handle(e) {
    // const newdata = { ...datalivreur };
    // newdata[e.target.id] = e.target.value;
    // setDatalivreur(newdata);
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleregister(event) {
    event.preventDefault();
    axios
      .post('http://localhost:5000/auth/register/', user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      });
    // this.props.history.push('/delivery');
    console.log(user);
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label>username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter username"
            id="username"
            onChange={handle}
            value={user.username}
          />
          {/* {errors.first_name && (
            <div className="text-danger">{this.state.errors.first_name}</div>
          )} */}
        </div>

        <div className="form-group">
          <label>email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter email"
            id="email"
            onChange={handle}
            value={user.email}
          />
          {/* {this.state.errors.last_name && (
            <div className="text-danger">{this.state.errors.last_name}</div>
          )} */}
        </div>
        <div className="form-group">
          <label>password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            placeholder="Enter password"
            id="password"
            onChange={handle}
            value={user.password}
          />
          {/* {this.state.errors.password && (
            <div className="text-danger">{this.state.errors.password}</div>
          )} */}
        </div>

        <div className="form-group">
          <label>adresse</label>
          <input
            type="text"
            className="form-control"
            name="adresse"
            placeholder="Enter adresse"
            id="adresse"
            onChange={handle}
            value={user.adresse}
          />
          {/* {this.state.errors.phone && (
            <div className="text-danger">{this.state.errors.phone}</div>
          )} */}
        </div>

        <div className="form-group">
          <label>phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Enter phone"
            id="phone"
            onChange={handle}
            value={user.phone}
          />
          {/* {this.state.errors.cin && (
            <div className="text-danger">{this.state.errors.cin}</div>
          )} */}
        </div>
        <div className="form-group">
          <label>role</label>
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Enter role"
            id="role"
            onChange={handle}
            value={user.role}
          />
          {/* {this.state.errors.availability && (
            <div className="text-danger">{this.state.errors.availability}</div>
          )} */}
        </div>

        {/* <a href="/" className="btn btn-success" onClick={this.onSubmit}>
            &nbsp;Submit
          </a> */}
        <button
          className="btn btn-success"
          type="button"
          onClick={handleregister}
        >
          <i className="far fa-check-square"></i>
          &nbsp;Submit
        </button>
      </form>
    </div>
  );
};

export default Addlivreur;
