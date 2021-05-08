import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUserfind,
  selectConnectuser,
} from '../../../redux/slices/userSlice';
import DetailsVehicule from '../Raed/DetailVehicule';
export default function AddVehicle(props) {
  const [connectUser, error] = useSelector(selectConnectuser);
  const dispatch = useDispatch();

  useEffect(async () => {
    const id = props.match.params.id;
    console.log('val de id : ', id);
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

  return <DetailsVehicule></DetailsVehicule>;
}
