




function TableContent () {
    const Content1={
        id1:1,
        name1:"Suresh",
        age1:20
    }
    const Content2={
       id2:2,
       name2:"Naresh",
       age2:21 
    }
    const Content3={
        id3:3,
        name3:"Ramesh",
        age3:22
    }
    const Content4={
        id:4,
        name:"Lokesh",
        age:19
    }
    // By using Destructuring assigning object data into variables.(Note:Use this variables in JSX using {})
    const{id1,name1,age1}=Content1;
    const{id2,name2,age2}=Content2;
    const{id3,name3,age3}=Content3;
    // or also we can directly use this Content4 data in our JSX:-
    return(
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            <tr>
                <td>{id1}</td>
                <td>{name1}</td>
                <td>{age1}</td>
            </tr>
            <tr>
                <td>{id2}</td>
                <td>{name2}</td>
                <td>{age2}</td>
            </tr>
            <tr>
                <td>{id3}</td>
                <td>{name3}</td>
                <td>{age3}</td>
            </tr>
            <tr>
                <td>{Content4.id}</td>
                <td>{Content4.name}</td>
                <td>{Content4.age}</td>
            </tr>
        </table>
    )
}
export default TableContent;