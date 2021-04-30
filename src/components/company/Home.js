import {useEffect} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
import {useDispatch ,useSelector } from "react-redux";
import {loginUserfind, selectConnectuser, } from "../../redux/slices/userSlice";

import { Carousel} from 'react-bootstrap';
import track from '../../assets/track.jpeg';
import delivery from '../../assets/deliveryman.jpeg';
import delivery1 from '../../assets/delivery1.jpeg';
import employe from '../../assets/employe.jpeg';
import team from '../../assets/team.jpeg';

export default function Home (props){

  // const [connectUser, error] = useSelector(selectConnectuser);
  //   const dispatch = useDispatch();

  //   useEffect( async()=>{
  //       if(Cookies.get('connect.sid') ){
          
  //       }else{
  //         await axios
  //        .get("http://localhost:5000/auth/logout", { withCredentials: true })
  //        .then((res) => {
  //              console.log(res)
  //              localStorage.removeItem("userInfo");
  //              dispatch(loginUserfind(res.data));
  //              props.history.push('/');
  //         } ) }
      
  //   },[Cookies.get()])

    return (
    //     <>
    //     <h1 className='text-center' style={{marginTop : '30px', marginBottom: '30px'}} >Wellcome To Your Workspace</h1>
    //   <Carousel>
    //     <Carousel.Item>
    //       <img className="d-block w-100" src={delivery} alt="First slide" />
    //       {/* <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption> */}
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img className="d-block w-100" src={delivery1} alt="Second slide" />

    //       {/* <Carousel.Caption>
    //         <h3>Second slide label</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </Carousel.Caption> */}
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img className="d-block w-100" src={track} alt="Third slide" />

    //       {/* <Carousel.Caption>
    //         <h3>Third slide label</h3>
    //         <p>
    //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //         </p>
    //       </Carousel.Caption> */}
    //     </Carousel.Item>
    //   </Carousel>

    //   <>
    //     <br />
    //     <br />
    //     <br />
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-sm">
    //           <div className="card">
    //             <img
    //               className="card-img-top"
    //               src={delivery1}
    //               alt="Card image cap"
    //             />
    //             <div className="card-body">
    //               <h5 className="card-title">Reviews</h5>
    //               <p className="card-text">
    //                 It was a good experience working for that company because I
    //                 did learn a lot and I appreciate everything and just looking
    //                 for work where I work with a team and deal with customers
    //               </p>
    //               {/* <a href="#" class="btn btn-primary">
    //                 Go somewhere
    //               </a> */}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-sm">
    //           <div className="card">
    //             <img className="card-img-top" src={team} alt="Card image cap" />
    //             <div className="card-body">
    //               <h5 className="card-title">Company Service</h5>
    //               <p className="card-text">
    //                 {' '}
    //                 Our company is recognized for the quality of its services.
    //                 It is a daily commitment on the part of our company to
    //                 ensure the satisfaction of the customers of our customers.
    //                 The strengths of the network are the people, the equipment
    //                 and the work processes.
    //               </p>
    //               {/* <a href="#" class="btn btn-primary">
    //                 Go somewhere
    //               </a> */}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-sm">
    //           <div className="card">
    //             <img className="card-img-top" src={employe} alt="Card image cap" />
    //             <div className="card-body">
    //               <h5 className="card-title">Employee of the Month</h5>
    //               <p className="card-text">
    //                 Congratulations! You are smart delivery’s Employee of the
    //                 month! We’ve recognized how hard you’ve been working . It
    //                 took a lot of effort and time to offre this kind off service
    //                 , organize all the activities and do it all on a
    //                 high-quality level.
    //               </p>
    //               {/* <a href="#" class="btn btn-primary">
    //                 Go somewhere
    //               </a> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     </>
    // </>
    <></>
    )
}