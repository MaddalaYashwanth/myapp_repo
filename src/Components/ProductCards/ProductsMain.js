
import { Component } from "react";
import axios from "axios";
import "./ProductsCardsStyle.css";


class ProductsMain extends Component{
    state={
        products:[],
        sum:0
        // Here i intialize the sum of products as "0".
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products?sort=desc").then((val)=>{
            this.setState(
                {products:val.data},
                ()=>{this.sumMethod()}
            )
            // this.sumMethod();
            // Instead of calling method like this,we can place in the setState method as a 2 argument as a arrow function.
            // Here this function calling is required for getting total sum of products at intial loading of products.
            // It called only once in an entire life cycle of component.
        });
    }
    // Now i am writing arrow function for the functionality of remove button.
    handleRemove=(ind)=>{
        const updatedArray=this.state.products.slice();
        // Since instead of manipulating our main array, i am taking another duplicate array with slice method.
        updatedArray.splice(ind,1);
        
            this.setState(
                {products:updatedArray},
                ()=>{this.sumMethod()}
            )
            //After every removing of an element we should calculate the total sum of the available products. So we should call the sumMethod()
            // this.sumMethod()
            // Instead of calling method like this,we can place in the setState method as a 2 argument as a arrow function.
        
    }
    // 
    sumMethod=()=>{
            const TotalCost=this.state.products.reduce((acc,val)=>acc+val.price,0)
            this.setState(
                {sum:TotalCost}
            )
        
    }
    // 
    removeAll=()=>{
        this.setState(
            {products:[],
             sum:0
            }
        )
    }
    render(){
        return(
            <>
                {/* Now i am trying to display the total cost of products displayed in webpage by calling the method sumMethod().*/}
                {/* {this.sumMethod()} */}
                {/* Here if we call this method in render() every time totalSum is calculated after every rendering which we not required. */}
                <h2>Total Cost:${this.state.sum} </h2>
                <button onClick={this.removeAll}>Remove All</button>
                 <div className="container1">
               {    
                    this.state.products.length>0 ? 
                    this.state.products.map((val,ind)=>{
                        return(
                            <div className="card" style={{width:"300px"}} key={val.id}>
                                 {/* Here key attribute is optional but usage is best practice to provide unique value for every item. */}
                                 {/* here i have unique id for every element so i given those id values as key value. */}
                                 {/* This key is added to the very first element */}
                            <img className="card-img-top" src={`${val.image}`} alt="Card img" width={100} height={200}/>
                            <div className="card-body">
                            <h4 className="card-title">{`Title: ${val.title}`}</h4>
                            <p className="card-text">{`Price: $${val.price}`}</p>
                            {/* Now i am trying to keep functionality of remove item button */}
                            <button onClick={()=>{this.handleRemove(ind)}}>Remove</button>
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
export default ProductsMain