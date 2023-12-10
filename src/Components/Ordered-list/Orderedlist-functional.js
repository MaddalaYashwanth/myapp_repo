import ListItems from "../Listitems"



// Try to write components name in CamelCase.(Ex:OrdeListFunctional)
// Note the return statement in the function takes only the html content so if we want we can write in empty tag say <>....</>.
function OrderListFunctional(){
    return(
        <ol>
            <ListItems/>
        </ol>
    )

    
}
export default OrderListFunctional;

// Note:- Here function name refers to the Component in react.