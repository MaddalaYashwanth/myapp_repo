
import "./Table2Styling.css";


// We can also use directly the used prop name as argument i.e., const Table2Props=({TableData})=>{
//                                                                   const[row1,row2,row3]=TableData;

const Table2Props=(props)=>{
    const[row1,row2,row3]=props.TableData;
    return(
        <table class="ta1">
            <tr class="tr1">
                <th class="th1">ID</th>
                <th class="th1">Name</th>
                <th class="th1">Roll</th>
            </tr>
            <tr class="tr1">
                <td class="td1">{row1.id}</td>
                <td class="td1">{row1.name}</td>
                <td class="td1">{row1.roll}</td>
            </tr>
            <tr class="tr1">
                <td class="td1">{row2.id}</td>
                <td class="td1">{row2.name}</td>
                <td class="td1">{row2.roll}</td>
            </tr>
            <tr class="tr1">
                <td class="td1">{row3.id}</td>
                <td class="td1">{row3.name}</td>
                <td class="td1">{row3.roll}</td>
            </tr>
        </table>
    )
}


export default Table2Props