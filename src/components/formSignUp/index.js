import "./form.css";

const SignupForm = () => {
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

                <div className="form-row">
                    <label for="username">Confirm Password: </label>
                    <input type="pass" placeholder="Confirm Password"></input>
                </div>
                <div className="form-row links">
                    <button type='submit'>Sign Up</button>
                </div>
            </div>
        </form>
    );

};

export default SignupForm;