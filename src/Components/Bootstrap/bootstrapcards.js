




const CardsBootStrap = () =>{
    return(
        <div className="card" style={{width:"400px"}}>
        <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card img"/>
        <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
        </div>
        </div>
    )
    // Make sure to change syntax like style values must be in the object.
}
export default CardsBootStrap;