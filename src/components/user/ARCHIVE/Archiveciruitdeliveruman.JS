import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Archiveciruitdeliveruman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archives: [],
      // archives2: ['a', 'b'],
      // limit: 2,
      // skip: 0,
      // pagtable: [],
      // perPage: 4,
      // currentPage: 0,
      // offset: 0,
    };
  }
  componentDidMount() {
    this.getDELVERY();
  }
  getDELVERY() {
    axios
      .get(`/circuit/getarchives/${this.props.con.username}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          this.setState({
            archives: res.data.data,
          });
          console.log('archives :', this.state.archives);
          console.log('archives count :', this.state.archives.length);
        }
      });
  }

  onDelete = (id) => {
    axios
      .delete(`/circuit/delete_ciruit_from_archive/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        alert(' has been deleted successfully');
        this.getDELVERY();
      });
  };

  render() {
    console.log('rrr', this.props.con);
    console.log('ll', this.state.archives);
    return (
      <div className="container">
        {/* <h1>archiveeeeeeee</h1> */}
        <table className="table table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">NUM</th>
              <th scope="col">username</th>
              <th scope="col">adresse</th>
              <th scope="col">email</th>
              <th scope="col">PHONE</th>
              <th scope="col">description</th>
              <th scope="col">FROM</th>
              <th scope="col">TO</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.archives.map((vk, index, key) => (
              <tr>
                <th scope="row">{index}</th>

                <td>{vk.username}</td>

                <td>{vk.adresse}</td>
                <td>{vk.email}</td>
                <td>{vk.phone}</td>
                <td>{vk.description}</td>
                <td>{vk.from}</td>
                <td>{vk.to}</td>

                <td>
                  {/* <a className="btn btn-warning mx-3" href={`/edit/${vk._id}`}>
                    <i className="fas fa-edit"></i> Edit
                  </a> */}
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(vk._id)}
                  >
                    <i className="fas fa-times-circle"></i> Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ margin: '80px' }}>
          <h3>Number Of Successful Delivery : {this.state.archives.length}</h3>
          <h3 className="my-5">
            Your State This Week :{' '}
            {this.state.archives.length >= 3 ? 'Good ' : 'Bad'}
          </h3>
        </div>
      </div>
    );
  }
}
export default withRouter(Archiveciruitdeliveruman);
