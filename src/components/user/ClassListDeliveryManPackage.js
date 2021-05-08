//*******************************************************hethi bel functoin////////////////////////////// */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import MapQuest from './Map/MapQuest';
import { render } from '@testing-library/react';
import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserfind, selectConnectuser } from '../../redux/slices/userSlice';
import { event } from 'jquery';
import { fetchWeather } from '../../components/user/fetchWeather';
import '../../styles/user/fetchWeather.css';

export default function ClassListDeliveryManPackage(props) {
  const [connectUser, error] = useSelector(selectConnectuser);

  const dispatch = useDispatch();
  const [devv, setDevv] = useState([]);
  const [list, setList] = useState([]);
  const [listto, setListto] = useState([]);
  const [raed, setRaed] = useState([]);
  const [ahmed, setAhmed] = useState([]);
  const [posf, setPosf] = useState([]);
  const [post, setPost] = useState([]);
  const [prevState, setState] = React.useState([]);

  const [items, setItems] = useState([]);
  const [itemname, setItemname] = useState('');
  const [start, setStart] = useState('');
  const [points, setPoints] = useState('');
  const [pointsval, setPointsval] = useState([]);

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [datadeliveryciruit, setDatadeliveryciruit] = useState({
    // id: '',
    username: '',
    adresse: '',
    email: '',
    phone: '',
    description: '',
    from: '',
    to: '',
  });
  console.log('this is prorps', props.con.username);

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery('');
    }
  };
  const history = useHistory();
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

  const handleSubmit = (_id) => {
    console.log(_id);
    //history.push('/delivery');
    axios
      .delete(
        `/circuit/gotoarchive/${_id}`,

        { withCredentials: true }
      )
      .then((res) => {
        console.log('data: ', res);

        setDatadeliveryciruit(res.data.dataa);
        console.log(res.data);
      });
    window.location.reload();
    console.log('ahmedd ', props.vk);
  };

  const additem = async (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        // id: items.length,
        name: itemname,
      },
    ]);
    const midell = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?q=${itemname}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`,
      { withCredentials: true }
    );
    setPoints([...points, midell.data.items[0].position]);
    console.log('point back', points.length);
    console.log('ùùùù', midell.data.items[0].position);
    setItemname('');
  };

  const aff = async () => {
    const startpossition = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?q=${start}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`,
      { withCredentials: true }
    );
    const route = {
      start: startpossition.data.items[0].position,
      points: points,
    };
    const x = await axios.post('/getpoints', route, {
      withCredentials: true,
    });
    const tr = x.data.waypoints;
    const str = x.data.start;
    //const traget = x.data.dataaa.dist;
    console.log('debut du ciruit', x.data.start);
    console.log('table point ciruit', x.data.waypoints);
    // console.log('tragett', x.data.dataaa.dist);
    setPointsval([...pointsval, x]);
    console.log('tr', tr);

    aff2(tr, str);
  };

  const aff2 = (val, val2) => {
    // var a = aff();
    history.push({
      pathname: '/homeuser/deliveryMan/ciruitdeliveryman',
      state: { detail: val, detail2: val2 },
    });
    console.log('aa', val);
    console.log('val2', val2);
    // console.log('val3', val3);
  };

  useEffect(async () => {
    const resulta = await axios
      .get(
        `/adminpassdelivery/all/deliveryman/package/${connectUser.username}`,
        { withCredentials: true }
      )
      .then((resulta) => {
        setDevv(resulta.data.data);
        // console.log('bgguhjvb', resulta.data.data);
        // console.log('dev :', resulta.data.data);
        const devv = resulta.data.data;
        console.log('devv', devv);
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
    axios
      .get(
        `/adminpassdelivery/all/deliveryman/package/${connectUser.username}`,
        { withCredentials: true }
      )
      .then((res) => {
        setDevv(res.data.data);
        console.log('con', connectUser.username);
        /// console.log('con', res.data.data);

        axios
          .get(
            `/adminpassdelivery/all/deliveryman/package/from/${connectUser.username}`,
            { withCredentials: true }
          )
          .then((res) => {
            setList(
              res.data.data
              //  res.data.data.length,
            );
            console.log('list  : ', res.data.data);
            axios
              .get(
                `/adminpassdelivery/all/deliveryman/package/to/${connectUser.username}`,
                { withCredentials: true }
              )
              .then((res) => {
                setListto(
                  res.data.data
                  //  res.data.data.length,
                );
                console.log('listto : ', res.data.data); //1
                // list.map((l) => {
                //   axios
                //     .get(
                //       `https://geocode.search.hereapi.com/v1/geocode?q=${l.from}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`,
                //       { withCredentials: true }
                //     )
                //     .then((res, err) => {
                //       setPosf(
                //         // [...posf, k.data.items[0].position]

                //         // posfrom: res.data.items[0].position.lat,
                //         // posfrom1: res.data.items[0].position.lng,
                //         res.data.items[0].position

                //         ///raed: [...this.state.raed, this.state.posF ],
                //       );
                //       console.log('raed555  : ', posf);

                //       // setRaed((prevState) => [...prevState, posf]); temchiiii
                //       // this.setState((prevState) => ({
                //       //   raed: [...prevState.raed, posf],
                //       // }));
                //       // setState((prevState) => {
                //       //   return [...prevState.raed, posf];
                //       // });
                //       console.log('raed555  : ', 'raed');
                //       console.log('posF  : ', posf);
                //     });
                // });

                listto.map((t) => {
                  axios
                    .get(
                      `https://geocode.search.hereapi.com/v1/geocode?q=${t.to}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`,
                      { withCredentials: true }
                    )
                    .then((res, err) => {
                      setPost(
                        // posto: res.data.items[0].position.lat,
                        // posto1: res.data.items[0].position.lng,
                        res.data.items[0].position
                      );
                      // setAhmed((prevState) => [...prevState, post]);
                      // this.setState((prevState) => ({
                      //   // ahmed: [...prevState.ahmed, post],
                      // }));
                      // setAhmed((previousData) => ({
                      //   ...previousData.ahmed,
                      //   ahmed: previousData.ahmed.push(post),
                      // }));
                      // setAhmed((previousData) => ({
                      //   ...previousData,
                      //   ahmed: previousData.ahmed.push(post),
                      // }));

                      // setAhmed((prevState) => [...prevState.ahmed, post]);
                      // this.setState((prevState) => ({
                      //   ahmed: [...prevState.ahmed, post],
                      // }));
                      console.log('ahmed  : ', ahmed);
                    });
                });
              });
          });
      });
  }, [axios]);

  var tab = [];

  useEffect(() => {}, []);
  function getDELVERYY() {
    list.map((l) => {
      axios
        .get(
          `https://geocode.search.hereapi.com/v1/geocode?q=${l.from}&apiKey=wxibHI6_dpOa-llEWT7lgZBJUCXvcVtpmYDHX333cIk`,
          { withCredentials: true }
        )
        .then((res, err) => {
          const y = res.data.items[0].position;
          tab.push(y);
          console.log('tttt', tab);
          // setPosf([...posf, y]);
          console.log('raed555  : ', posf);

          console.log('raed555  : ', 'raed');
          console.log('posF  : ', posf);
        });
      console.log('tttt', tab);
      console.log('ttttlenn', tab.length);
    });
  }

  return (
    <>
      {/* <button
        onClick={() => {
          getDELVERYY();
        }}
      >
        ffff
      </button> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2"></div>
          <div className="col-lg-3 mt-2 mb-2">
            {/* <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchTerm"
              onChange={handleTextSearch}
            ></input> */}
          </div>
        </div>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">NUM</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">adresse</th>
              <th scope="col">phone</th>
              <th scope="col">description</th>
              <th scope="col">from</th>
              <th scope="col">to</th>
              <th scope="col">deliverymanId</th>
              <th scope="col">vehiculeID</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {devv.map((vk, index, key) => (
              <tr>
                <th scope="row">{index}</th>
                <td>
                  <td>{vk.username}</td>
                </td>
                <td>{vk.email}</td>
                <td>{vk.adresse}</td>
                <td>{vk.phone}</td>

                <td>{vk.description}</td>
                <td>{vk.from}</td>
                <td>{vk.to}</td>
                <td>{vk.deliverymanId}</td>
                <td>{vk.vehiculeID}</td>
                <a
                  className="btn btn-primary my-2"
                  onClick={() => {
                    handleSubmit(vk._id);
                  }}
                >
                  Done
                </a>
                <td>
                  {/* <Link
                    className="icon mx-3"
                    to={`/homeuser/user/makedeliveryuser/${vk._id}`}
                  >
                    <i className="fa fa-pencil" style={{ color: 'green' }}></i>
                  </Link> */}

                  {/* <span className="icon" onClick={() => this.onDelete(vk._id)}>
                    <i className="fa fa-trash" style={{ color: 'red' }}></i>
                  </span> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <Link
          to="/homeuser/user/makedeliveryuser"
          className="bot btn btn-secondary"
        >
          Add Delivery
        </Link> */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        ></div>
      </div>

      <div className="ll">
        <input
          className="putt"
          name="start"
          placeholder="..."
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <form onSubmit={additem}>
          <input
            className="putt1 my-3"
            name="item"
            placeholder="..."
            type="text"
            value={itemname}
            onChange={(e) => setItemname(e.target.value)}
          />
        </form>
      </div>

      <button className="  btn btn-secondary " onClick={aff}>
        Road
      </button>
      <div className="main-container">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>

      {/* <button
        onClick={
          ({ aff },
          () => history.push('/homeuser/deliveryMan/ciruitdeliveryman'))
        }
      >
        go to map
      </button> */}
    </>
  );
}
// export default withRouter(ClassListDeliveryManPackage);
//////*************************************hrthi belclass t5demmm//////////////////////////////////////////// */
// import React, { Component } from 'react';
// import { withRouter } from 'react-router';
// import axios from 'axios';
// import MapQuest from './Map/MapQuest';

// class ClassListDeliveryManPackage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       devv: [],
//       list: [],
//       listto: [],
//       raed: [],
//       ahmed: [],
//       posfrom: '',
//       posfrom1: '',
//     };
//   }
//   componentDidMount() {
//     this.getDELVERYY();
//   }

//   getDELVERYY = () => {
//     axios
//       .get(
//         `/adminpassdelivery/all/deliveryman/package/${this.props.con.username}`,
//         { withCredentials: true }
//       )
//       .then((res) => {
//         this.setState({
//           devv: res.data.data,
//         });

//         axios
//           .get(
//             `/adminpassdelivery/all/deliveryman/package/from/${this.props.con.username}`,
//             { withCredentials: true }
//           )
//           .then((res) => {
//             this.setState({
//               list: res.data.data,
//               count: res.data.data.length,
//             });
//             console.log('list  : ', this.state.list);
//             axios
//               .get(
//                 `/adminpassdelivery/all/deliveryman/package/to/${this.props.con.username}`,
//                 { withCredentials: true }
//               )
//               .then((res) => {
//                 this.setState({
//                   listto: res.data.data,
//                   count: res.data.data.length,
//                 });
//                 console.log('count est egal : ', this.state.count); //1
//                 this.state.list.map((l) => {
//                   axios
//                     .get(
//                       `https://geocode.search.hereapi.com/v1/geocode?q=${l.from}&apiKey=j2IVmPG7KrThTd7CQ3_WTRoJiWVZpgQQLmyDcbQs_mo`,
//                       { withCredentials: true }
//                     )
//                     .then((res, err) => {
//                       this.setState({
//                         posfrom: res.data.items[0].position.lat,
//                         posfrom1: res.data.items[0].position.lng,
//                         posF: res.data.items[0].position,
//                         //raed: [...this.state.raed, this.state.posF ],
//                       });
//                       this.setState((prevState) => ({
//                         raed: [...prevState.raed, this.state.posF],
//                       }));

//                       console.log('raed  : ', this.state.raed);
//                       console.log('posF  : ', this.state.posF);
//                     });
//                 });

//                 this.state.listto.map((t) => {
//                   axios
//                     .get(
//                       `https://geocode.search.hereapi.com/v1/geocode?q=${t.to}&apiKey=j2IVmPG7KrThTd7CQ3_WTRoJiWVZpgQQLmyDcbQs_mo`,
//                       { withCredentials: true }
//                     )
//                     .then((res, err) => {
//                       this.setState({
//                         posto: res.data.items[0].position.lat,
//                         posto1: res.data.items[0].position.lng,
//                         posT: res.data.items[0].position,
//                       });
//                       this.setState((prevState) => ({
//                         ahmed: [...prevState.ahmed, this.state.posT],
//                       }));
//                       console.log('ahmed  : ', this.state.ahmed);
//                     });
//                 });
//               });
//           });

//         console.log('dev :', this.state.devv);
//       });
//   };

//   render() {
//     return (
//       <>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-9 mt-2 mb-2"></div>
//             <div className="col-lg-3 mt-2 mb-2">
//               <input
//                 className="form-control"
//                 type="search"
//                 placeholder="Search"
//                 name="searchTerm"
//                 onChange={this.handleTextSearch}
//               ></input>
//             </div>
//           </div>
//           <table className="table table-dark table-striped">
//             <thead>
//               <tr>
//                 <th scope="col">NUM</th>
//                 <th scope="col">username</th>
//                 <th scope="col">email</th>
//                 <th scope="col">adresse</th>
//                 <th scope="col">phone</th>
//                 <th scope="col">description</th>
//                 <th scope="col">from</th>
//                 <th scope="col">to</th>
//                 <th scope="col">deliverymanId</th>
//                 <th scope="col">vehiculeID</th>
//                 <th scope="col">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.devv.map((vk, index, key) => (
//                 <tr>
//                   <th scope="row">{index}</th>
//                   <td>
//                     <td>{vk.username}</td>
//                   </td>
//                   <td>{vk.email}</td>
//                   <td>{vk.adresse}</td>
//                   <td>{vk.phone}</td>

//                   <td>{vk.description}</td>
//                   <td>{vk.from}</td>
//                   <td>{vk.to}</td>
//                   <td>{vk.deliverymanId}</td>
//                   <td>{vk.vehiculeID}</td>

//                   <td>
//                     {/* <Link
//                     className="icon mx-3"
//                     to={`/homeuser/user/makedeliveryuser/${vk._id}`}
//                   >
//                     <i className="fa fa-pencil" style={{ color: 'green' }}></i>
//                   </Link> */}

//                     {/* <span className="icon" onClick={() => this.onDelete(vk._id)}>
//                     <i className="fa fa-trash" style={{ color: 'red' }}></i>
//                   </span> */}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* <Link
//           to="/homeuser/user/makedeliveryuser"
//           className="bot btn btn-secondary"
//         >
//           Add Delivery
//         </Link> */}
//           <div
//             style={{
//               marginTop: '20px',
//               display: 'flex',
//               justifyContent: 'center',
//             }}
//           >
//             {/* <ReactPaginate
//             previousLabel={'prev'}
//             nextLabel={'next'}
//             breakLabel={'...'}
//             breakClassName={'break-me'}
//             pageCount={this.state.pageCount}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={this.handlePageClick}
//             containerClassName={'pagination'}
//             subContainerClassName={'pages pagination'}
//             activeClassName={'active'}
//           /> */}
//           </div>
//         </div>

//         <MapQuest
//           height={`${window.innerHeight * 0.89}px`}
//           width={'100%'}
//           center={[40.015831, -105.27927]}
//           baseLayer={'light'}
//           zoom={10}
//           pitch={60}
//           bearing={0}
//           apiKey={'	3h6UEd8JLoeJGGSaCdHzuBBCkoRFjLYf'}
//           name="raed"
//           Raed={this.state.raed}
//           Ahmed={this.state.ahmed}
//           Count={this.state.count}
//           // {...props}
//           con={this.props.con}
//         />
//       </>
//     );
//   }
// }
// export default withRouter(ClassListDeliveryManPackage);
