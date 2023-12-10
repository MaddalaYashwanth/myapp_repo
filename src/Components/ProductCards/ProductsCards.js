import { Component } from "react";
import axios from "axios";
import "./ProductsCardsStyle.css";


// Here we are doing a case that whenever user clicks the button, products have to display as a cards.
// Firstly products are 0, when user clicks button means here the state is changing. So we use setState() method to change the state. 


class ProductCards extends Component{

    state={
        products:[]
    }
    // We are taking an function for the action for the button.i.e.,for changing state we use setState() method.
    // Here setState() accepts 2 arguments:object and a function.
    handleClick=()=>{
        axios.get("https://fakestoreapi.com/products?sort=desc").then((res)=>{
            this.setState(
                {
                    products:res.data
                }
            )
        })
    }
    // Here by this method we change the state of products from empty to 20 products.
    // If we want to display this 20 products as a Cards, we have to enter those individual product in our card using map method.
    // Here in our state method we have our products. i.e., intially 0 products but after click button we get our products. 
    render(){
        return(
            <>
               <button onClick={this.handleClick}>Click here for Products</button>
               {/* Now displaying this 20 products as a Cards. */}
               {/* Note use {} for accesing the below code */}
                <div className="container1">
               {    
                    this.state.products.length>0 ? 
                    this.state.products.map((val)=>{
                        return(
                            <div className="card" style={{width:"300px"}} key={val.id}>
                                 {/* Here key attribute is optional but usage is best practice to provide unique value for every item. */}
                                 {/* here i have unique id for every element so i given those id values as key value. */}
                                 {/* This key is added to the very first element */}
                            <img className="card-img-top" src={`${val.image}`} alt="Card img" width={100} height={200}/>
                            <div className="card-body">
                            <h4 className="card-title">{`Title: ${val.title}`}</h4>
                            <p className="card-text">{`Price: $${val.price}`}</p>
                            {/* <button onClick={()=>{this.handleClick(val)}}>See More</button> */}
                            {/* <a href="#" className="btn btn-primary">See More</a> */}
                            </div>
                            </div> 
                        )
                    }):
                    <h4>No Products Available</h4>
               }
               </div>
            </>
        )
    }
}
export default ProductCards


