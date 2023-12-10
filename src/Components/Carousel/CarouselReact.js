

// Using npm react carousal library :-
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Component } from "react";

// importing images of slides fro assests file.
import Slide1 from "../Assets/Carousel/slide1.png";
import Slide2 from "../Assets/Carousel/slide2.png";
import Slide3 from "../Assets/Carousel/slide3.png";


class DemoCarousel extends Component {
    render() {
        return (
            // We can also include Props for <Carousel width={"50%"}> and other default props mentioned in the npm react Carousal document.
            // showArrows={false},showIndicators={false},showThumbs={false}
            <Carousel width={"70%"}>
                <div>
                    <img src={Slide1} alt="err"/>
                    <p className="legend">Hello</p>
                </div>
                <div>
                    <img src={Slide2} alt="err"/>
                    <p className="legend">Welcome</p>
                </div>
                <div>
                    <img src={Slide3} alt="err"/>
                    <p className="legend">Users</p>
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel;