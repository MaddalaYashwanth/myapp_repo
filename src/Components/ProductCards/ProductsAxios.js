import axios from "axios";
// We have to import axios when we want to use this library
import { Component } from "react";






class CardsAxios extends Component{



    fun=()=>{
        // Here we use get() method and also we can use post and other methods as well.
        // Here axios will directly convert the data into json, So no need to convert again as in fetch() method.
        axios.get("https://fakestoreapi.com/products?sort=desc").then((val)=>{console.log(val)});
        // Here this axios gives the whole data in the form of object, where our required information is present in "data" property in that object.
        // So in order to get only data we can use:
        axios.get("https://fakestoreapi.com/products?sort=desc").then((val)=>{console.log(val.data)})
    }
    render(){
        return(
            <>
                <button onClick={this.fun}>Click here for Products</button>
            </>
        )
    }
}
export default CardsAxios