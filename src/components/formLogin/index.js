import "./form.css";

const UserForm = () => {
    return (
        <form>
            <div className="form-group">
                <div className="form-row">
                    <label for="username">Username: </label>
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className="form-row">
                    <label for="username">Password: </label>
                    <input type="pass" placeholder="Password"></input>
                </div>
                <div className="form-row links">
                    <button type='submit'>Log In</button>
                    <a href="/signUp">Sign Up</a>
                </div>
            </div>
        </form>
    );

};

export default UserForm;