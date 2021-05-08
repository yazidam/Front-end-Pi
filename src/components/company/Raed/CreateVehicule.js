import React, { Component } from 'react';
import Axios from 'axios';
class CreateVehicule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modele: '',
      marque: '',
      image: '',
      userId: this.props.userId.id,
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  handleFileChange = (e) => {
    this.setState({
      ...this.state,
      image: e.target.files[0],
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('modele', this.state.modele);
    formData.append('marque', this.state.marque);
    formData.append('image', this.state.image);
    formData.append('userId', this.state.userId);

    Axios.post('/vehicules/vehicules', formData, {
      withCredentials: true,
    }).then((res) => {
      if (res.data.success) {
        alert('Added');
        console.log('formdataaaa:', formData);

        this.setState({ modele: '', marque: '', image: '' });
      }
    });
  };

  render() {
    console.log('useeeeeeeeeeeeeer:', this.state.userId);

    return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create new post</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group">
            <label>Modele</label>
            <input
              type="text"
              className="form-control"
              name="modele"
              placeholder="Enter title"
              value={this.state.modele}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Marque</label>
            <input
              type="text"
              className="form-control"
              name="marque"
              placeholder="Enter category"
              value={this.state.marque}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={this.handleFileChange}
            />
          </div>

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

export default CreateVehicule;
