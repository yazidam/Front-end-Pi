import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import ArchiveVehicule from "./ArchiveVehicule";
import {Link} from 'react-router-dom';


class App extends Component {
   API_ENDPOINT = 'http://localhost:8000/'
  constructor(props) {
    super(props);
    this.state = {
      vehicules: [],
      orgvehicules: [],
      perPage: 4,
      currentPage: 0,
      offset: 0,
      archives : [],
      userId: this.props.userId.id


    };
    this.handlePageClick = this.handlePageClick.bind(this);

  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadMoreData()
    });

};

loadMoreData() {
const data = this.state.orgvehicules;

const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
this.setState({
  pageCount: Math.ceil(data.length / this.state.perPage),
  vehicules:slice
})

}
  componentDidMount() {
    this.getVehicules();
  }

  getVehicules() {
    axios.get(`http://localhost:5000/vehicules/getvehicules/${this.state.userId}`, { withCredentials: true }).then(res => {
        console.log(res.data);
         var tdata = res.data.data;
         

         console.log('data-->'+JSON.stringify(tdata))
        var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
          pageCount: Math.ceil(tdata.length / this.state.perPage),
          orgvehicules: res.data.data,
          vehicules: slice,
          modele: res.data.data.modele
        });
        console.log("vehicules: ", this.state.vehicules);
        console.log("orgvehicules: ", this.state.orgvehicules);
        console.log("modele: ", this.state.modele);



      
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:5000/vehicules/vehicules/${id}`, { withCredentials: true }).then((res) => {
      alert( "has been deleted successfully");
      this.getVehicules();
    });
  };

  filterContent(vehicules, searchTerm) {
    const result = vehicules.filter(
      (vehicule) =>
        vehicule.modele.toLowerCase().includes(searchTerm) ||
        vehicule.marque.toLowerCase().includes(searchTerm) 
    );
    this.setState({ vehicules: result });
  }

  handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:5000/vehicules/getvehicules", { withCredentials: true }).then((res) => {
      if (res.data) {
        this.filterContent(res.data.data, searchTerm);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Vehicules</h4>
          </div>
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

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Modele</th>
              <th scope="col">Marque</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.vehicules.map((vehicule, index) => (
              <tr>
                <th scope="row">{index}</th>

                <td>
                  <a href={`http://localhost:5000/vehicules/vehicules/${vehicule._id}`}>{vehicule.modele}</a>
                </td>
                <td>{vehicule.marque}</td>
                <td><img
              src={`http://localhost:5000/${vehicule.image}`}
              alt={vehicule.image}
              width="200" height="200"
            /></td>

                <td>
                  <a className="btn btn-warning" href={`/homeuser/company/vehicle/edit/${vehicule._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(vehicule._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                  <a className="btn btn-warning" href={`/homeuser/company/vehicle/details/${vehicule._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/homeuser/company/vehicle/add" className="btn btn-success">
          Add New Vehicule
        </Link>

        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>


      </div>


    );

  }
}

export default App;