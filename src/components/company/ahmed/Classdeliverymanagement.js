import { useEffect, useState } from 'react';
import { setErrors } from '../../user/Errors/setErrors';
import axios from 'axios';
import { withRouter } from 'react-router';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import {
  loginUserfind,
  selectConnectuser,
} from '../../../redux/slices/userSlice';

export default function Classdeliverymanagement(props) {
  const [selectedoption, setselectedoption] = useState('');
  const [selectoptionvoiture, setselectoptionvoiture] = useState([]);
  const [selectoption, setselectoption] = useState([]);
  const [deliverymanId, setdeliverymanId] = useState('');
  const [modele, setmodele] = useState('');

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
  const { id } = useParams();
  const location = useLocation();
  console.log('loll from', location.state.detail[0].from);
  console.log('loll to', location.state.detail[0].to);

  useEffect(() => {
    console.log('valuer des id :', id);
    console.log(location.state.detail); // result: 'some_value'

    axios
      .get(`/delivery/listdeliverybycompany/${connectUser.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log('id user est', connectUser.id);
        // setStudentState(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    getname();
    voiture();
  }, []);
  function getname() {
    axios
      .get(`/livreur/users/deliveryman/${connectUser.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        const dataa = res.data.data;
        console.log(dataa);

        const options = dataa.map((x) => ({
          value: x.username,
          label: x.username,
        }));
        setselectoption(options);
      });
  }
  function voiture() {
    axios
      .get(`/vehicules/getvehicules/${connectUser.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          const dataaa = res.data.data;

          const options = dataaa.map((x) => ({
            value: x.modele,
            label: x.modele,
          }));
          setselectoptionvoiture(options);
        }
      });
  }
  //console.log(location.state.detail);
  function handelchange(deliverymanId) {
    setdeliverymanId(deliverymanId);
    console.log('chniya 3mlt select :', deliverymanId.value);
  }
  function handelchangevoiture(modele) {
    setmodele(modele);
    console.log('chniya 3mlt select :', modele.value);
  }
  // const [data, setData] = useState({
  //   // username: "aymen",
  //   // email: "aymen@gmail.com",
  //   // adresse: "paris",
  //   // phone: "70604051",
  //   // description: "colisss",
  //   // from: "manouba_tunis",
  //   // to: "mahdia_tunis",
  //   deliverymanId: deliverymanId.value,
  //   vehiculeID: modele.value

  // });
  console.log(location.state.detail[0].username);
  //  for (var i = 0; i < location.state.detail; i++) {
  const data = {
    _id: id,
    username: location.state.detail[0].username,
    email: location.state.detail[0].email,
    adresse: location.state.detail[0].adresse,
    phone: location.state.detail[0].phone,
    description: location.state.detail[0].description,
    from: location.state.detail[0].from,
    to: location.state.detail[0].to,
    deliverymanId: deliverymanId.value,
    vehiculeID: modele.value,
  };
  function onSubmit(e) {
    e.preventDefault();
    console.log(id);

    axios
      .get(`/delivery/admin/passdelivery/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          let checkData = {
            checkbox: JSON.stringify(data),
          };
        }
      });

    axios
      .post('/adminpassdelivery/add', data, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          alert('Edited successfully');
        }
      });
    // }
  }

  console.log(location.state.detail);

  return (
    <div className="col-md-10 mt-3 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add delivery man </h1>
      <form className="needs-validation" noValidate>
        <label>delivery_man</label>
        <br />

        <Select
          value={deliverymanId}
          options={selectoption}
          name="deliverymanId"
          onChange={handelchange}
        />
        <label>car</label>
        <br />
        <Select
          value={modele}
          options={selectoptionvoiture}
          name="modele"
          onChange={handelchangevoiture}
        />

        <button className="btn btn-success" type="submit" onClick={onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp;Submit
        </button>
      </form>
    </div>
  );

  /*constructor(props) {
    super(props);
    // console.log('fghfdgdfb:', this.props.jj);
    this.state = {
      username: '',
      email: '',
      adresse: '',
      phone: '',
      description: '',
      from: '',
      to: '',
      userId: '',
      companyId: '',
      vehiculeID: '',
      deliverymanId: '',
      tablivreur: [],
      jj: [],
      yazid: [],
      selectedoption: '',
      selectoptionvoiture: '',
      selectoption: [],
    };
  }
 
  componentDidMount() {
    
    const id = this.props.match.params.id;
    console.log('valuer des id :',id);
    var array = this.props.match.params.array;
    console.log('valuer des array :',array);

    //console.log('array : ',this.props.array);
    axios
      .get(/delivery/admin/passdelivery/${id}, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          console.log('aa :',res.data);
          //var object = JSON.parse(res.data.data.checkbox); 
    //      console.log('aaaaaa :',object[0].from);
          // this.setState({
          //   username: res.data.data.username,
          //   email: res.data.data.email,
          //   adresse: res.data.data.adresse,
          //   phone: res.data.data.phone,
          //   description: res.data.data.description,
          //   from: res.data.data.from,
          //   to: res.data.data.to,
          // });
          //console.log('ttttt', res.data.data.checkbox);
        }
      });
    this.getname();
    this.voiture();
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  getname() {
    axios.get(
        /livreur/users/deliveryman/${this.props.con.id},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        
        if (res.data) {
          const data = res.data.data;

          const options = data.map((x) => ({
            value: x.username,
            label: x.username,
          }));
          //console.log(data);
          //console.log(options);
          this.setState({
            selectoption: options,
          });
        }
      });
  }
  voiture() {
    axios
      .get(
        /vehicules/getvehicules/${this.props.con.id},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        
        if (res.data) {
          const data = res.data.data;

          const options = data.map((x) => ({
            value: x.modele,
            label: x.modele,
          }));
          //console.log(data);
          //console.log(options);
          this.setState({
            selectoptionvoiture: options,
          });
        }
      });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get(/delivery/admin/passdelivery/${id}, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          //var object = JSON.parse(res.data.data.checkbox);  
          //console.log('aaaaaa :',object[1].from);
         
      

        }
    const {
      username,
      email,
      adresse,
      phone,
      description,
      from,
      to,
      deliverymanId,
      vehiculeID,
    } = this.state;
   
    {
      //  for(var i =0;i<object.length;i++){
      const data = {
          _id : id,
          // username: object[i].username,
          // email: object[i].email,
          // adresse: object[i].adresse,
          // phone: object[i].phone,
          // description: object[i].description,
          // from: object[i].from,
          // to: object[i].to,
         deliverymanId: this.state.deliverymanId.value,
         vehiculeID: this.state.modele.value,
        }
      axios
        .post(/adminpassdelivery/add, data,{
          withCredentials: true,
        })
        .then((res) => {
          console.log('this is data :',data);

          if (res.data.success) {
            console.log('this is data :',data);

            alert('Edited successfully');
          
          }
        
        });
      }
  //}
  })
}
  handelchange = (deliverymanId) => {
    this.setState({ deliverymanId });
      console.log('chniya 3mlt select :', deliverymanId.value);
  };
  handelchangevoiture = (modele) => {
    this.setState({ modele });
    console.log('chniya 3mlt select :', modele.value);
  };
  render() {
    return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add delivery man </h1>
        <form className="needs-validation" noValidate>
      

         
         

         
         

          <label>delivery_man</label>
          <br />

          <Select
            value={this.state.deliverymanId}
            options={this.state.selectoption}
            name="deliverymanId"
            onChange={this.handelchange}
          />
          <label>car</label>
          <br />

          <Select
            value={this.state.modele}
            options={this.state.selectoptionvoiture}
            name="modele"
            onChange={this.handelchangevoiture}
          />

          <button
            className="btn btn-success"
            type="submit"
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Submit
          </button>
        </form>
      </div>
    );
  }
}*/
  //export default withRouter(Classdeliverymanagement);
}

//}
