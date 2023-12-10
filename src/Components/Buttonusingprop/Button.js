

// const Button=()=>{
//     return(
//         <button>Login</button>
//     )
// }
// export default Button;

// // Here when we want 2 buttons, we will create another button statically and import this 2 components in our app.js
// // import Button, {Button2} from "./..."
// // Here we can use only 1 default export in our file, so we used named export below

// export const Button2=()=>{
//     return(
//         <button>Signup</button>
//     )
// }

// But instead of this we can use props as below: -

const Button1=(props)=>{
    return(
        <button>{props.text}</button>
    )
}
export default Button1;

// Here we give props.text in {} because that is an object which is javaScript, so in react we use {} for js code.
// Now we have to export this in our main root file App.js.




