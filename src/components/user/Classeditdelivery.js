import React, { Component } from 'react';
import Axios from 'axios';
import { setErrors } from './Errors/setErrors';
export default class Classeditdelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      from: '',
      to: '',
      errors: {},
    };
  }
  validate = (description, from, to) => {
    const errors = setErrors(description, from, to);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === '');
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`/delivery/passdelivery/${id}`, {
      withCredentials: true,
    }).then((res) => {
      if (res.data) {
        this.setState({
          description: res.data.data.description,
          from: res.data.data.from,
          to: res.data.data.to,
        });
      }
    });
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
    const { description, from, to } = this.state;
    if (this.validate(description, from, to)) {
      const data = {
        description: description,
        from: from,
        to: to,
      };
      console.log(data);
      Axios.patch(`/delivery/passdelivery/${id}`, data, {
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
        <h1 className="h3 mb-3 font-weight-normal">Create new bokk</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group">
            <label>description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            {this.state.errors.description && (
              <div className="text-danger">{this.state.errors.description}</div>
            )}
          </div>

          <div className="form-group">
            <label>from</label>
            <input
              type="text"
              className="form-control"
              name="from"
              placeholder="Enter from"
              value={this.state.from}
              onChange={this.handleInputChange}
            />
            {this.state.errors.from && (
              <div className="text-danger">{this.state.errors.from}</div>
            )}
          </div>

          <div className="form-group">
            <label>to</label>
            <input
              type="text"
              className="form-control"
              name="to"
              placeholder="Enter to"
              value={this.state.to}
              onChange={this.handleInputChange}
            />
            {this.state.errors.to && (
              <div className="text-danger">{this.state.errors.to}</div>
            )}
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
