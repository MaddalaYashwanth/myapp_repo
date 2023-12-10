
import {Component} from "react";
// To import images from assests file
import Slide1 from "../Assets/Carousel/slide1.png";
import Slide2 from "../Assets/Carousel/slide2.png";
import Slide3 from "../Assets/Carousel/slide3.png";
// Now these images name we can directly use in our jsx as {img_name}


// Using bootstrap
class Carousel extends Component {
    render(){
        return(
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Slide1} className="d-block w-100" alt="Hello"/>
                </div>
                <div className="carousel-item">
                <img src={Slide2} className="d-block w-100" alt="Welcome"/>
                </div>
                <div className="carousel-item">
                <img src={Slide3} className="d-block w-100" alt="I am Yash"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        )
    }
}
export default Carousel
