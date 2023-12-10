





const htmlFormBootStrap = ()=>{
    return(
        <htmlForm action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="htmlForm-label">Email:</label>
                    <input type="email" className="htmlForm-control" id="email" placeholder="Enter email" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="htmlForm-label">Password:</label>
                    <input type="password" className="htmlForm-control" id="pwd" placeholder="Enter password" name="pswd"/>
                </div>
                <div className="htmlForm-check mb-3">
                    <label className="htmlForm-check-label">
                    <input className="htmlForm-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </htmlForm>
        // Note while copying code from bootstrap material make sure to change syntaxes accordinly as JSX.
        // Make sure to change className from class and also close all the tags.
    )
}
export default htmlFormBootStrap;





