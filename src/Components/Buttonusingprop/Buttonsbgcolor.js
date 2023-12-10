



// const ButtonBgColor=(props)=>{
//     return(
//         <button style={{backgroundColor:props.bgColor,color:props.textColor}}>{props.text}</button>
//         // In style we provided object with styles and in the property values we provided dynamically the props values.
//     )
// }
// export default ButtonBgColor;


                        // or we can simplify the above one my deStructuring the props object:-
                        // ButtonProperties={text:"Size 1",backgroundColor:"aqua",color:"red"}
                        // const{text,backgroundColor,color}=ButtonProperties
                        // Note use the same keys for the variables u are creating using destructuring.

// props={ButtonProperties={text:"Size 1",backgroundColor:"aqua",color:"red"}}
// i.e.,Here in props object, we have another object called ButtonProperties.
const ButtonBgColor=(props)=>{
    const {text,bgColor,textColor,width,height}=props.ButtonProperties;
    return(
        <button style={{backgroundColor:bgColor,color:textColor,width:width,height:height}}>{text}</button>
    )
}
export default ButtonBgColor;