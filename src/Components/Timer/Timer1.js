
import { Component } from "react";

class Timer1 extends Component{
    state={
        sec:0,
        min:0
    }
    handleClick=()=>{
        setInterval(()=>{
            let new_sec=this.state.sec+1;
            let new_min=this.state.min;
            if(new_sec>=60){
                new_sec=0;
                new_min=this.state.min+1
            }
            // 
            this.setState({
                sec:new_sec,
                min:new_min
            }
            )
        },1000)
    }
    render(){
        return(
            <>
                <button onClick={this.handleClick}>Start timer</button>
                <h1>{this.state.min} : {this.state.sec}</h1>
            </>
        )
    }
}
export default Timer1