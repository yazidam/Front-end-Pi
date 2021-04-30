import "../styles/Footer.css";

export default function Footer(){
    return(
        <div id="bgfooter">
        <div className="row" id="mainfooter">
            <div className="col-sm-12 col-md-4 ">
                <div className="part">
                <h3 >Smart Delivery</h3>
                <p className="text-nowrap text-truncate" >Sauvez votre temps avec smart delivery en un clic</p>
                <p id="secicon">
                    <i className="fa fa-facebook-square sociaux" ></i>
                    <i className="fa fa-twitter-square sociaux" ></i>
                    <i className="fa fa-linkedin-square sociaux" ></i>
                    <i className="fa fa-google-plus-square sociaux"></i>
                </p>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
            <div className="part">
                <h3>Services</h3>
                <p className="text-nowrap text-truncate" >Tournée de véhicule</p>
                <div className="separation" ></div>
                <p className="text-nowrap text-truncate">Améliorer la performance de votre travail</p>
                <div className="separation" ></div>
                <p className="text-nowrap text-truncate" >Gagner de l'argent facilement</p>
                <div className="separation" ></div>
                <p className="text-nowrap text-truncate" >Tracer votre colis</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
            <div className="part">
                <h3>Contact Info</h3>
                <p ><i className="fa fa-home contact" ></i>Z.I Chotrana II - B.P. 160 Pôle&nbsp; Technologique 2083 Cite El Ghazala Raoued Ariana Tunisie</p>
                <div className="separation" ></div>
                <p className="text-nowrap text-truncate" >
                    <i className="fa fa-phone contact" ></i>+216 70 250 000</p>
                <div className="separation" ></div>
                <p className="text-nowrap text-truncate" ><i className="fa fa-envelope contact" ></i>contact@esprit.tn</p>
            </div>
            </div>
        </div>
    </div>
    )
}