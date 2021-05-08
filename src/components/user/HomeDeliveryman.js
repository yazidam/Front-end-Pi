import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUserfind,
  selectConnectuser,
} from '../../../src/redux/slices/userSlice';
const HomeDeliveryman = (props) => {
  const [connectUser, error] = useSelector(selectConnectuser);
  const dispatch = useDispatch();
  const [deliveryman, setDeliveryman] = useState({
    username: '',
    adresse: '',
    email: '',
    phone: '',
    role: '',
  });
  useEffect(async () => {
    if (Cookies.get('connect.sid')) {
    } else {
      await axios.get('/auth/logout', { withCredentials: true }).then((res) => {
        console.log(res);
        localStorage.removeItem('userInfo');
        dispatch(loginUserfind(res.data));
        props.history.push('/');
      });
    }
  }, [Cookies.get()]);

  return (
    <>
      <div style={{ height: '600px' }}>
        <h1>Home Delivery Man</h1>
      </div>
    </>
  );
};

export default HomeDeliveryman;
