import React , {useEffect} from "react"
import "../styles/Home.css";
import firstcarousel from "../assets/firstcarousel.jpg";
import secondcarousel from "../assets/secondcarousel.jpg";
import thirdcarousel from "../assets/thirdcarousel.jpg";
import Aos from "aos"
import "aos/dist/aos.css"

export default function Home() {

  useEffect(()=>{
    Aos.init({duration : 2000})
  },[])

  return (
    <>
    <div id="bodyhome">
      <div className="container" id="containerhome">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 imgcarousel "
                src={firstcarousel}
                alt="firstcarousel"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>
                  {/* Le logiciel d’optimisation de tournées qui s’adapte à votre
                  activité */}
                  The route optimization software that adapts to your business
                </h3>
                <p>
                  {/* Aucune installation. Paramétrage simple. Environnement 100%
                  sécurisé. */}
                  No installation. Easy to set up. 100% secure environment.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 imgcarousel "
                src={secondcarousel}
                alt="secondcarousel"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>
                   {/* Moins d’effort, plus de productivité.  */}
                   Less effort, more productivity.
                   </h3>
                <br />
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 imgcarousel"
                src={thirdcarousel}
                alt="thirdcarousel"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>
                  {/* Gagner de l'argent pendant votre temps libre */}
                  Earn money in your free time
                  </h3>
                <br />
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    


    <section>
        <h4 className="text-center" data-aos="fade-down" data-aos-delay="100" id="h4homepage">Smart Delivery</h4>
        <h3 className="text-center" data-aos="fade-up" data-aos-delay="100"><strong> {/*Meilleures solutions créative*/} Best creative solutions</strong></h3>
    </section>
    <section>
        <div className="row"  id="rowhomepage">
            <div className="col-sm-12 col-md-3 divcercle" data-aos="fade-right" data-aos-delay="300" >
                <div id="icondiv"><i className="fa fa-gears" id="cercle1"></i></div>
                <p className="text-center paracercle" >{/*Solutions créative*/}Creative solutions</p>
            </div>
            <div className="col-sm-12 col-md-3 divcercle" data-aos="fade-right" data-aos-delay="500" >
                <div id="icondiv"><i className="fa fa-leaf" id="cercle2"></i></div>
                <p className="text-center paracercle" >{/*Solutions créative*/}Creative solutions</p>
            </div>
            <div className="col-sm-12 col-md-3 divcercle" data-aos="fade-right" data-aos-delay="700" >
                <div id="icondiv"><i className="fa fa-heart" id="cercle3"></i></div>
                <p className="text-center paracercle" >{/*Solutions créative*/}Creative solutions</p>
            </div>
            <div className="col-sm-12 col-md-3 divcercle" data-aos="fade-right" data-aos-delay="900" >
                <div id="icondiv"><i className="fa fa-laptop" id="cercle4"></i></div>
                <p className="text-center paracercle" >{/*Solutions créative*/}Creative solutions</p>
            </div>
        </div>
    </section>
    </div>
    </>
  );
}
