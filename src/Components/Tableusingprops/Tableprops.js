
import "./TableStyling.css";

// Here we are importing table styling css file in this page.




const TableUsingProps=(props)=>{
    return(
        <table>
            <tr>
                <th>ID</th>
                <th>Dataofprops</th>
            </tr>
            <tr>
                <td>1</td>
                <td>{props.text}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>{props.text}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>{props.text}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>{props.text}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>{props.text}</td>
            </tr>
        </table>
    )
}
export default TableUsingProps;