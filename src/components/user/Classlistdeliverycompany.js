import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import ReactPaginate from 'react-paginate';

class Classlistdeliverycompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devv: [],
      // limit: 2,
      // skip: 0,
    };
  }
  getDELVERYCOMPANY() {
    axios
      .get(`/livreur/users/roledeliveryman`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          this.setState({
            devv: res.data.data,
          });
          console.log('dev :', this.state.devv);
        }
      });
  }
  componentDidMount() {
    this.getDELVERYCOMPANY();
  }
  filterindata(devv, searchTerm) {
    const resultat = devv.filter((x) =>
      x.adresse.toLowerCase().includes(searchTerm)
    );
    this.setState({ devv: resultat });
  }
  handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios
      .get('/livreur/users/roledeliveryman', {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          this.filterindata(res.data.data, searchTerm);
        }
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2"></div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchTerm"
              onChange={this.handleTextSearch}
            ></input>
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

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.devv.map((vk, index, key) => (
              <tr>
                <th scope="row">{index}</th>
                <td>
                  <td>{vk.username}</td>
                </td>
                <td>{vk.email}</td>
                <td>{vk.adresse}</td>
                <td>{vk.phone}</td>

                <td>
                  <Link
                    className="icon mx-3"
                    to={`/homeuser/user/makedeliveryuser/${vk._id}`}
                  >
                    <i className="fa fa-pencil" style={{ color: 'green' }}></i>
                  </Link>

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
        >
          {/* <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          /> */}
        </div>
      </div>
    );
  }
}
export default Classlistdeliverycompany;
