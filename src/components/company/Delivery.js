import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserfind, selectConnectuser } from '../../redux/slices/userSlice';
import Classlistdeliverybycompany from './ahmed/Classlistdeliverybycompany';

export default function Delivery(props) {
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

  return (
    <div>
      <h1>i'm Delivery</h1>
      <Classlistdeliverybycompany con={connectUser} />
    </div>
  );
}
