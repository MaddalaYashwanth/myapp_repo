import MbImage2 from "./MB1.png"




// function ImageRelativeFunctional(){
//     return(
//         <img src="./MB1.png" alt="err-img"/>
//     )
// }
        //or we can simply write with arrow function as:- 
const ImageRelativeFunctional=()=><img src={MbImage2} alt="err-img" style={{width:"200px"}}/>
export default ImageRelativeFunctional;