import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import ReactPaginate from 'react-paginate';
import '../../styles/user/classlistdelivery.css';
class Classlistdelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devv: [],
      // limit: 2,
      // skip: 0,
      pagtable: [],
      perPage: 4,
      currentPage: 0,
      offset: 0,
    };
  }
  componentDidMount() {
    this.getDELVERY();
  }
  onDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delivery/passdelivery/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        alert(' has been deleted successfully');
        this.getDELVERY();
      });
    // axios
    //   .delete(
    //     `http://localhost:5000/adminpassdelivery/deliverymanpackage/${id}`,
    //     {
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => {
    //     alert(' has been deleted successfully');
    //     this.getDELVERY();
    //   });
  };
  getDELVERY(id) {
    axios
      .get(`http://localhost:5000/delivery/all/${this.props.con.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        var tdata = res.data.data;
        console.log('data-->' + JSON.stringify(tdata));

        var slice = tdata.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        this.setState({
          pageCount: Math.ceil(tdata.length / this.state.perPage),
          pagtable: res.data.data,
          devv: slice,

          modele: res.data.data[0].to,
        });
        console.log('dev :', this.state.dev);
        console.log('hhhh :', this.state.pagtable);
        console.log('hh:', this.state.modele);
      });
  }
  filterindata(devv, searchTerm) {
    const resultat = devv.filter(
      (x) =>
        x.description.toLowerCase().includes(searchTerm) ||
        x.from.toLowerCase().includes(searchTerm) ||
        x.to.toLowerCase().includes(searchTerm)
    );
    this.setState({ devv: resultat });
  }
  handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios
      .get('http://localhost:5000/delivery/all', { withCredentials: true })
      .then((res) => {
        if (res.data) {
          this.filterindata(res.data.data, searchTerm);
        }
      });
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };
  loadMoreData() {
    const data = this.state.pagtable;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      devv: slice,
    });
  }

  render() {
    var tab = this.state.devv;
    console.log('user connecte111:', this.props.con);
    console.log('nom user connecte:', this.props.con.username);
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
              <th scope="col">description</th>
              <th scope="col">FROM</th>
              <th scope="col">TO</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.devv.map((vk, index, key) => (
              <tr>
                <th scope="row">{index}</th>
                <td>
                  <Link to={`/homeuser/user/detailsdelivery/${vk._id}`}>
                    <td>{this.props.con.username}</td>
                  </Link>
                </td>
                <td>{this.props.con.email}</td>
                <td>{this.props.con.adresse}</td>
                <td>{this.props.con.phone}</td>
                <td>{vk.description}</td>

                <td>{vk.from}</td>
                <td>{vk.to}</td>

                <td>
                  <Link
                    className="icon mx-3"
                    to={`/homeuser/user/editdelivery/${vk._id}`}
                  >
                    <i className="fa fa-pencil" style={{ color: 'green' }}></i>
                  </Link>

                  <span className="icon" onClick={() => this.onDelete(vk._id)}>
                    <i className="fa fa-trash" style={{ color: 'red' }}></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link
          to="/homeuser/user/makedeliveryuser"
          className="bot btn btn-secondary"
        >
          Add Delivery
        </Link>
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ReactPaginate
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
          />
        </div>

        {/* <div>
          <div onClick={this.nextPage}> Previous Page </div>
          <div onClick={this.previousPage}> Next Page </div>
        </div> */}
      </div>
    );
  }
}
export default withRouter(Classlistdelivery);
