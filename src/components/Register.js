import { useState } from 'react';
import '../styles/Register.css';
import login from '../assets/login.jpg';
import axios from 'axios';

export default function Register() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    adresse: '',
    role: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //setPassword(e.target.value.password)
    console.log(user);
  };

  function handleLogin() {
    console.log(user);
  }

  return (
    <section className="Form my-4 mx-5" id="secregister">
      <div className="container">
        <div className="row no-gutters" id="rowregister">
          <div className="col-lg-5">
            <img
              src={login}
              className="img-fluid"
              alt="logimg"
              id="imgregister"
            />
          </div>
          <div className="col-lg-7 px-5 py-5">
            <h1 className="font-weight-bold py-3">WeCode</h1>
            <h4>Let's get you on board</h4>
            <form>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control my-3 p-4"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control my-3 p-4"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control my-3 p-4"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="text"
                    placeholder="Adresse"
                    className="form-control my-3 p-4"
                    name="adresse"
                    value={user.adresse}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <select
                    className="custom-select custom-select-lg my-3"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                  >
                    <option>Select your profile</option>
                    <option value="user">User</option>
                    <option value="company">Company</option>
                    <option value="deliveryMan">deliveryMan</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <button
                    type="button"
                    className="btn1"
                    id="btnregister"
                    onClick={handleLogin}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
