import "./form.css";

const UserForm = () => {
    return (
        <form>
            <div className="form-group">
                <div className="form-row d-flex justify-content-between">
                    <label for="username">Username: </label>
                    <input className="form-control" type="text" placeholder="Username"></input>
                </div>
                <div className="form-row d-flex justify-content-between">
                    <label for="username">Password: </label>
                    <input className="form-control" type="pass" placeholder="Password"></input>
                </div>
                <div className="form-row d-flex justify-content-between links">
                    <button className="btn btn-primary" type="submit">Log In</button>
                    <a href="/signUp">Sign Up</a>
                </div>
            </div>
        </form>
    );

};

export default UserForm;