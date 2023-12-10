import ListItems from "../Listitems";
// Here we also need to import Component from react.(***Remember***)
import { Component } from "react";




class OrderListClass extends Component{
    render(){
        return(
            <ol>
                <ListItems/>
            </ol>
        )
    }
}
export default OrderListClass;