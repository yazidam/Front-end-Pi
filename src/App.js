import React, { useState, useEffect, lazy } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchUsers, selectUsers } from './redux/slices/admin/usersSlice';

import {
  loginUserfind,
  logoutUserfind,
  selectConnectuser,
} from './redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import Home from './components/Home';
import HomeUser from './components/HomeUser';
import Register from './components/Register';

// import ReactNotification from 'react-notifications-component';
// import { store } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';
// //import 'animate.css';

function App() {
  const dispatch = useDispatch();
  const [users, err] = useSelector(selectUsers);
  const [connectUser, error] = useSelector(selectConnectuser);
  const [user, setUser] = useState({ email: '', password: '' });
  /*const voirresult = () =>{
    const res = queryApi("", {}, "GET", false, true)
    console.log(res)
  }*/
  /*useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);*/

  async function handleLogin() {
    await axios
      .post('http://localhost:5000/login', user, { withCredentials: true })
      .then((res) => {
        dispatch(loginUserfind(res.data));
        //<Route to='/'/>
      });

    dispatch(fetchUsers());
    setUser({ email: '', password: '' });
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //setPassword(e.target.value.password)
    console.log(user);
  };

  const handleUsers = () => {
    //console.log(users)
    console.log(connectUser);
    dispatch(fetchUsers());
    console.log(users);
    /*axios.get('http://localhost:5000/users',{withCredentials : true}).then(res =>{
           console.log(res.data)
                        
        })*/
  };
  async function logoutUser() {
    await axios.post('http://localhost:5000/logout').then((res) => {
      dispatch(logoutUserfind(res.data));
    });
  }

  return (
    /* <div className="App">
      <button onClick={voirresult}>click</button>
    </div>*/
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/homeuser" component={HomeUser} />
          {/* <ReactNotification /> */}
          <Route path="/**" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
