import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./form.css";

const UserForm = () => {

    const [error, setError] = useState([]); // Mostrarle los errores al usuario
    const [formState, setFormState] = useState({ // Datos por defecto del formulario (vacio)
        username: "",
        password: ""
    });

    const handleChange = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const logIn = () => {
        fetch("http://localhost:8080/users/login", {
            method: "POST",
            body: JSON.stringify({
                "username": formState.username,
                "password": formState.password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then(data => {
            if (data.status === 202) { // Usuario correcto
                sessionStorage.setItem("isLogged", true);
                redirect("/home");
            }
            if (data.status === 400) { // Usuario no encontrado
                setError("User not found");
            }
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setError("");
        logIn();
    };

    const redirect = useNavigate();

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-row d-flex justify-content-between">
                        <label htmlFor="username">Username: </label>
                        <input className="form-control" type="text" name="username" onChange={handleChange} placeholder="Username"></input>
                    </div>
                    <div className="form-row d-flex justify-content-between">
                        <label htmlFor="username">Password: </label>
                        <input className="form-control" type="password" name="password" onChange={handleChange} placeholder="Password"></input>
                    </div>
                    <div className="form-row d-flex justify-content-between links">
                        <button className="btn btn-primary" type="submit">Log In</button>
                        <a href="/signUp">Sign Up</a>
                    </div>
                    <div>
                        {error && <p className="error">{error}</p>}
                    </div>
                </div>
            </form>
        </div>
    );

};

export default UserForm;