import {Component} from "react";



class ProductFetch extends Component{

    // Here in the class components no need to mention "const/var/let" keyword for declaring any variable.
    func=()=>{
        fetch("https://fakestoreapi.com/products?sort=desc").then((val)=>{return val.json()}).then((val)=>{console.log(val)});
        // We can also use axios instead of fetch method.
    }
    render(){
        return(
            <>
                {/* Note to access any Javascript we have to write code in {} */}
                {/* Here when we click on the button we can see our products in our console. */}
                <button onClick={this.func}>Click to see products</button>
               
            </>
        )
    }
}
export default ProductFetch