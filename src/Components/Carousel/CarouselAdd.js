import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Component } from "react";

import Slide1 from "../Assets/Carousel/slide1.png";
import Slide2 from "../Assets/Carousel/slide2.png";
import Slide3 from "../Assets/Carousel/slide3.png";


// Here i given slides dynamically with map method, if we want to add more images, we can just add image name which we imported in the state object.
class CarousalAdd extends Component{
    state={
        images:[]
    }
    handleImage=()=>{
        let a=[Slide1,Slide2,Slide3];
        // a.map((val)=>{
            this.setState(
                {
                    // images:this.state.images.push(val)
                    images:[...this.state.images,...a]
                    // spread operator (...) to concatenate the new images (a) with the existing array in the state.
                }
            )
        // })
    }
    render(){
        return(
            <>
                <button onClick={this.handleImage}>Add images</button>
                 <Carousel width={"70%"}>
                    {
                        this.state.images.map((val)=>{
                            return(
                            <div>
                                <img src={val} alt="err"/>
                                <p className="legend">Hello</p>
                            </div>
                        )})
                    }
                </Carousel>
            </>
        )
    }
}
export default CarousalAdd