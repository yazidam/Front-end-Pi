import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
class classdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livreeur: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`/livreur/ahmed/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          this.setState({
            livreeur: res.data.data,
          });
          console.log('one :', this.state.livreeur);
        }
      });
    //console.log('giugiuyg');
  }

  render() {
    const { username, email, adresse, phone } = this.state.livreeur;
    return (
      <div>
        <h3>Detail PAGE</h3>

        <hr />
        <dl className="row">
          <dt className="col-sm-2">username</dt>
          <dd className="col-sm-10">{username}</dd>
          <dt className="col-sm-2">email</dt>
          <dd className="col-sm-10">{email}</dd>
          <dt className="col-sm-2">adresse</dt>
          <dd className="col-sm-10">{adresse}</dd>
          <dt className="col-sm-2">phone</dt>
          <dd className="col-sm-10">{phone}</dd>
        </dl>
      </div>
    );
  }
}
export default withRouter(classdetails);
