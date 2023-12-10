
import {Component} from "react";



class YoutubeButton extends Component{

    state={
        isSubcribe:false,
        BtnText:"Please Subscribe"
    }
    // if we click particular button, we must the bind the data which we write in below function.
    // i.e., when we click the btn, we get the data of the below function.
    // Note write this below function as arrow function.
   
    handleClick=()=>{

         // to change the state in class based components we must use setState() method. It will cause re-render the component automatically.
        //  this setState method is pre-defined.
        // SetState accepts 2 arguments:- 1.object and 2.function after state update.
        // Here object argument is mandatory but function is not mandatory.

        this.setState(
            {
                isSubscribe:!this.state.isSubcribe,
                BtnText:"Thanks for Subscribing"
            }
        )
    } 

    render(){
        return(
            <>
                <button onClick={this.handleClick}>{this.state.BtnText}</button>
            </>
        )
    }
}
export default YoutubeButton