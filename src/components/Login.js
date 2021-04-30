import { useState} from "react";
import "../styles/Login.css";
import login from "../assets/login.jpg";
import axios from "axios";

import {
    loginUserfind,
    logoutUserfind,
    selectConnectuser,
  } from "../redux/slices/userSlice";
  import { useDispatch, useSelector } from "react-redux";

export default function Login(props){
    const dispatch = useDispatch();
    const [connectUser, error] = useSelector(selectConnectuser);
    const [user, setUser] = useState({ email: "", password: "" });

     const handleLogin = async()=> {
         axios
          .post("http://localhost:5000/auth/login", user, { withCredentials: true })
          .then((res) => {
            console.log(res.status)
            console.log(res)
            if(res.status === 203){
                alert(res.data)
           } 
           if(res.status === 200){
                
                localStorage.setItem("userInfo", JSON.stringify(res.data))
                dispatch(loginUserfind(res.data));
                props.history.push('/homeuser');
                console.log(connectUser)
           }
           
          });
    
        setUser({ email: "", password: "" });
      }

      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        //setPassword(e.target.value.password)
        console.log(user);
      };
    return(
        <section className="Form my-4 mx-5" id="seclogin">
            <div className="container">
                <div className="row no-gutters" id="rowlogin">
                    <div className="col-lg-5">
                        <img src={login} className="img-fluid" alt="logimg" id="imglogin"/>
                    </div>
                    <div className="col-lg-7 px-5 py-5">
                        <h1 className="font-weight-bold py-3">WeCode</h1>
                        <h4>Sign into your account</h4>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="email" placeholder="Email" className="form-control my-3 p-4" name="email" value={user.email} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="password" placeholder="Password" className="form-control my-3 p-4" name="password" value={user.password} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button type="button" className="btn1"  id="btnlogin"  onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}