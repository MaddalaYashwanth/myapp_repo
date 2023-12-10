import {Component} from "react";
// importing Styling from other css file.
import "./CardsStateStyle.css";
// importing images from Assets file
import Biryani from "../Assets/Food/Biriyani.jpg";
import Burger from "../Assets/Food/Burger.jpg";
import Dosa from "../Assets/Food/Dosa.jpg";
import Pizza from "../Assets/Food/Pizza.jpeg";
import Apricot from "../Assets/Food/Apricot Delight.jpeg";
import French from "../Assets/Food/French Fries.jpg";
import Belgium from "../Assets/Food/Belgium Chocolate Shake.jpeg";
import lolipop from "../Assets/Food/Chicken Lollipop.jpg";
import Samosa from "../Assets/Food/Samosa.jpeg";
import Butter from "../Assets/Food/Butter Naan.jpeg";





class CardState extends Component{

    // Including state object.
    // Using this state we bind the data in our render method.
    state={
        Menu_Items:[
            {
                ImageAdd:Biryani,
                name:"Biryani",
                Description:"Most popular Food."
            },
            {
                ImageAdd:Burger,
                name:"Burger",
                Description:"Most popular Food."
            },
            {
                ImageAdd:Dosa,
                name:"Dosa",
                Description:"Most popular Food."
            },
            {
                ImageAdd:Pizza,
                name:"Pizza",
                Description:"Most popular Food."
            },
            {
                ImageAdd:Apricot,
                name:"Apricot Delight",
                Description:"Most popular Food."
            },
            {
                ImageAdd:French,
                name:"French Fries",
                Description:"Most popular Food."
            },
            {
                ImageAdd:Belgium,
                name:"Belgium Chips Chocolate Shake",
                Description:"Most popular Food."
            },
            {
                ImageAdd:lolipop,
                name:"Chicken lolipop",
                Description:"Most popular Food."
            },
            {
                ImageAdd:Samosa,
                name:"Samosa",
                Description:"Most popular Food."
            },
            {
                ImageAdd:Butter,
                name:"Butter Naan",
                Description:"Most popular Food."
            }

        ]
    }

    // Now we use one method for actions in our menu cards .
    // Here in this method when we want to pass our values from Button action(map method) to this method, we have to mention ()=>{this.handleClick()}

    handleClick=(val)=>{
        alert(val.name);
    }





    // We used Bootstrap here for the card template.
    // To access this in our render() method we can use map method for the array Menu_Items i.e., this.state.Menu_Items.map(()=>{})
    // But here we are using map means it is a javascript so we have to use this in {}.
    // Note:Always try to keep one parent container in return by keeping atleast an (<> </>) empty container.

    render(){
        return(
            <div className="cont">
            {
                this.state.Menu_Items.map((val)=>{
                    return(
                            <div className="card" style={{width:"300px"}}>
                            <img className="card-img-top" src={val.ImageAdd} alt="Card img"/>
                            <div className="card-body">
                                <h4 className="card-title">{val.name}</h4>
                                <p className="card-text">{val.Description}</p>
                                <button onClick={()=>{this.handleClick(val)}}>See More</button>
                                {/* <a href="#" className="btn btn-primary">See More</a> */}
                            </div>
                            </div> 
                    )
                })
            }
            </div>
        )
    }
}
export default CardState