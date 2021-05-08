import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { withRouter } from 'react-router';

class DetailVehicule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicules: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('val de id : ', id);
    axios
      .get(`/vehicules/vehicules/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.data) {
          this.setState({
            vehicules: res.data.data,
          });
          console.log('post: ', this.state.vehicules);
        }
      });
  }

  jsPdfGenerator = () => {
    // Example From https://parall.ax/products/jspdf
    var pdf = new jsPDF('p', 'pt', 'a4');
    //string, x-position, y-position
    pdf.text(this.state.vehicules.modele, 180, 100); //string, x-position, y-position
    pdf.text(this.state.vehicules.marque, 180, 50); //string, x-position, y-position
    pdf.addImage(`/${this.state.vehicules.image}`, 100, 100);

    pdf.save('test.pdf');
  };
  render() {
    const { modele, marque, image } = this.state.vehicules;
    return (
      <div>
        <h4>{modele}</h4>
        <hr />
        <dl className="row">
          <dt className="col-sm-2">Modele</dt>
          <dd className="col-sm-10">{modele}</dd>
          <dt className="col-sm-2">Marque</dt>
          <dd className="col-sm-10">{marque}</dd>
          <dt className="col-sm-2">Image</dt>
          <dd className="col-sm-10">
            <img src={`/${image}`} alt={image} />
          </dd>

          <button onClick={this.jsPdfGenerator}>Generetae PDF</button>
        </dl>
      </div>
    );
  }
}

export default withRouter(DetailVehicule);
