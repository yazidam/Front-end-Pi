import React from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUserfind,
  selectConnectuser,
} from '../../.././redux/slices/userSlice';
import Archiveciruitdeliveruman from './Archiveciruitdeliveruman';

const Functionarchive = (props) => {
  const [connectUser, error] = useSelector(selectConnectuser);
  const dispatch = useDispatch();

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
    <div style={{ height: '700px' }}>
      <h1>Archive</h1>
      <Archiveciruitdeliveruman con={connectUser} />
    </div>
  );
};

export default Functionarchive;
