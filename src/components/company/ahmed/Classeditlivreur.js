import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router';

class Classeditlivreur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      adresse: '',
      phone: '',
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`/livreur/ahmed/${id}`, {
      withCredentials: true,
    }).then((res) => {
      if (res.data) {
        console.log(res.data);
        this.setState({
          username: res.data.data.username,
          email: res.data.data.email,
          adresse: res.data.data.adresse,
          phone: res.data.data.phone,
        });
      }
    });
    console.log('igiguyf', id);
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { username, email, adresse, phone } = this.state;
    {
      const data = {
        username: username,
        email: email,
        adresse: adresse,
        phone: phone,
      };
      console.log(data);
      Axios.patch(`/livreur/users/deliveryman/${id}`, data, {
        withCredentials: true,
      }).then((res) => {
        if (res.data.success) {
          alert('Edited successfully');
        }
      });
    }
  };
  render() {
    return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group">
            <label>username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            {/* {this.state.errors.first_name && (
              <div className="text-danger">{this.state.errors.first_name}</div>
            )} */}
          </div>

          <div className="form-group">
            <label>email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            {/* {this.state.errors.last_name && (
              <div className="text-danger">{this.state.errors.last_name}</div>
            )} */}
          </div>

          <div className="form-group">
            <label>adresse</label>
            <input
              type="text"
              className="form-control"
              name="adresse"
              placeholder="Enter adresse"
              value={this.state.adresse}
              onChange={this.handleInputChange}
            />
            {/* {this.state.errors.phone && (
              <div className="text-danger">{this.state.errors.phone}</div>
            )} */}
          </div>

          <div className="form-group">
            <label>phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Enter phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            {/* {this.state.errors.cin && (
              <div className="text-danger">{this.state.errors.cin}</div>
            )} */}
          </div>

          {/* <a href="/" className="btn btn-success" onClick={this.onSubmit}>
            &nbsp;Submit
          </a> */}
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
}
export default withRouter(Classeditlivreur);
