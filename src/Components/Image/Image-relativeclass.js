import { Component } from "react"
// import MbImage from "./MB1.png"


// 2 ways for image relative path:-
// i.When we have image in the source folder, we need to import it and we have to use that in the <img/> tag.
// ii.When we have image in the public folder, we can directly access that using "./img_name" path in the src attribute of <img/> tag.
// Note:-It is mandatory to mention "alt"(alternate) attribute in the <img/> tag.





class ImageRelativeClass extends Component{
    render(){
        return(
            // <img src={MbImage} alt="err-img" style={{width:"200px"}}/>
            <img src="./MB2.jpg" alt="err"/>
            // Here whenever we want an image relative path we can directly give "./" since public can be directly accessed.
        )
    }
}
export default ImageRelativeClass;