import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserfind, selectConnectuser } from '../../redux/slices/userSlice';

export default function Profile(props) {
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
      <body className="bg-light">
        <div className="container">
          <h1 className="text-center">I'm Profile</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 mt-5 pt-5">
              <div className="row z-depth-3">
                <div className="col-sm-4 bg-info rounded-left">
                  <div className="card-block text-center text-white">
                    <i className="fas fa-user-tie fa-7x mt-5" />
                    <h2 className="font-weight-bold mt-4">
                      {connectUser.username}
                    </h2>
                    <p>Your Profile</p>
                    <i className="far fa-edit fa-2x mb-4"></i>
                  </div>
                </div>
                <div className="col-sm-8 bg-white rounded-right">
                  <h3 className="mt-3 text-center"> Information</h3>
                  <hr className="badge-primary mt-0 " />
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="font-weight-bold"> Email</p>
                      <h6 className="text-muted">{connectUser.email}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="font-weight-bold"> Adresse</p>
                      <h6 className="text-muted">{connectUser.adresse}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="font-weight-bold"> Phone</p>
                      <h6 className="text-muted">{connectUser.phone}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="font-weight-bold"> Role</p>
                      <h6 className="text-muted">{connectUser.role}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
