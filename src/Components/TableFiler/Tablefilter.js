
import { Component } from "react";
import "./TablefilterStyling.css";



class TableFilter extends Component{
    state={
        id:[1,2,3,4,5,6],
        name:["Yash1","Yash2","Yash3","Yash4","Yash5","Yash6"],
        designation:["ReactDev","AngularDev","JavaScriptDev","ReactDev","AngularDev","JavaScriptDev"]
    }
        
    handleAll=()=>{
        this.setState(
            {
                id:[1,2,3,4,5,6],
                name:["Yash1","Yash2","Yash3","Yash4","Yash5","Yash6"],
                designation:["ReactDev","AngularDev","JavaScriptDev","ReactDev","AngularDev","JavaScriptDev"]
            }
        )
    }
    handleClick=(x)=>{
    // Here firstly, i reset the state properties to original using setState() method and then i filterd the required ones in that.
    // Here i written code in the setState({reset state code},()=>{filter code}) 2 nd argument callback function. 
    // Note setState takes 2 arguments: object and a callback function.
    this.setState(
        {
            id:[1,2,3,4,5,6],
            name:["Yash1","Yash2","Yash3","Yash4","Yash5","Yash6"],
            designation:["ReactDev","AngularDev","JavaScriptDev","ReactDev","AngularDev","JavaScriptDev"]
        },
        ()=>{
            
            var desigid=[];
            var designame=[];
            var desigdesignation=[];
            this.state.designation.filter((val,ind)=>{
            if(val===x){
                    desigdesignation.push(val);
                    desigid.push(this.state.id[ind]);
                    designame.push(this.state.name[ind]);
            } 
            })
            // 

            this.setState(
                {
                    designation:desigdesignation,
                    id:desigid,
                    name:designame
                }
            )
        }
    )
    }
    
    render(){
        return(
            <>
                <button onClick={this.handleAll}>All</button>
                <button onClick={()=>{this.handleClick("ReactDev")}}>Filter by ReactDev</button>
                <button onClick={()=>{this.handleClick("AngularDev")}}>Filter by AngularDev</button>
                <button onClick={()=>{this.handleClick("JavaScriptDev")}}>Filter by JavascriptDev</button>

                <table className="t1">
                    <tr className="t1">
                        <th className="t1">ID</th>
                        <th className="t1">Name</th>
                        <th className="t1">Designation</th>
                    </tr>
                    {
                        this.state.id.map((val,ind)=>{
                            return(
                                <tr className="t1">
                                    <td className="t1">{val}</td>
                                    <td className="t1">{this.state.name[ind]}</td>
                                    <td className="t1">{this.state.designation[ind]}</td>
                                </tr>
                            )
                        })
                    }
            
                </table>
            </>
        )
    }
}
export default TableFilter