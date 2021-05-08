import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserfind, selectConnectuser } from '../../redux/slices/userSlice';
import Datatabledeliveryman from './ahmed/Datatabledeliveryman';
import { Link } from 'react-router-dom';

export default function DeliveryMan(props) {
  const [connectUser, error] = useSelector(selectConnectuser);
  const [livreur, setLivreur] = useState(null);
  const [livreur1, setLivreur1] = useState(null);
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

  useEffect(() => {
    axios
      .get(`/livreur/users/deliveryman/${connectUser.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setLivreur(res.data.data);
        // setLivreur1(livreur.livreur.username);

        console.log('bgguhjvb', res.data);
        // if (res.data) {
        //   this.setState({
        //     setQuestions: res.data.data,
        //   });
        //   //console.log('list delivery man :', this.state.tablivreur);
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  //  console.log('bb ', livreur.props.username);

  return (
    <div>
      <h1>i'm DeliveryMan</h1>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div>
            <tbody>
              {livreur?.map((livreur, key) => (
                <Datatabledeliveryman vk={livreur}></Datatabledeliveryman>
              ))}
            </tbody>
          </div>
        </div>
        <Link
          to="/homeuser/company/addlivreeur"
          className="bot btn btn-secondary my-5"
        >
          Add
        </Link>
        {/* <Add hah={this.state.jj} /> */}
      </div>
    </div>
  );
}
