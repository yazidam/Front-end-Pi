import React, { Component } from 'react';
import axios from 'axios';

export default class Classdetailsdelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livrasion: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`/delivery/passdelivery/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          this.setState({
            livrasion: res.data.data,
          });
          console.log('kteb :', this.state.livrasion);
        }
      });
    console.log('giugiuyg');
  }

  render() {
    const {
      username,
      email,
      adresse,
      phone,
      description,
      from,
      to,
    } = this.state.livrasion;
    return (
      <div>
        <h3>Detail PAGE</h3>

        <hr />
        <dl className="row">
          <dt className="col-sm-2">username</dt>
          <dd className="col-sm-10">{username}</dd>
          {/* <dt className="col-sm-2">email</dt>
          <dd className="col-sm-10">{email}</dd> */}
          <dt className="col-sm-2">adresse</dt>
          <dd className="col-sm-10">{adresse}</dd>
          <dt className="col-sm-2">phone</dt>
          <dd className="col-sm-10">{phone}</dd>
          <dt className="col-sm-2">description</dt>
          <dd className="col-sm-10">{description}</dd>
          <dt className="col-sm-2">from</dt>
          <dd className="col-sm-10">{from}</dd>
          <dt className="col-sm-2">to</dt>
          <dd className="col-sm-10">{to}</dd>
        </dl>
      </div>
    );
  }
}
