import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./signupForm.css";

const SignupForm = () => {

	const [error, setError] = useState([]); // Mostrarle los errores al usuario
	const [formState, setFormState] = useState({ // Datos por defecto del formulario (vacio)
		nombre: "",
		apellido: "",
		username: "",
		password: "",
		email: "",
		birthday: ""
	});

	const handleChange = event => {

		const fechaNacimiento = new Date(formState.birthday);
		const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();

		if (edad < 18) {
			setError("Hay que ser mayor de edad");
			return;
		}

		setFormState({
			...formState,
			[event.target.name]: event.target.value,
		});
	};

	const redirect = useNavigate();

	const saveUser = () => {

		fetch("http://localhost:8080/users/signup", {
			method: "POST",
			body: JSON.stringify({
				"nombre": formState.nombre,
				"apellido": formState.apellido,
				"username": formState.username,
				"password": formState.password,
				"email": formState.email,
				"birthday": formState.birthday
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then(data => {
			if (data.status === 202) { // Usuario correcto
				sessionStorage.setItem("isLogged", true);
				redirect("/home");
			}
			if (data.status === 500) { // Usuario no encontrado
				setError("Bad credentials");
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setError("");
		saveUser();
	};

	return (
		<div>
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<div className="form-row d-flex justify-content-between">
						<label htmlFor="username">Nombre: </label>
						<input className="form-control" type="text" name="nombre" onChange={handleChange} placeholder="Name"></input>
					</div>
					<div className="form-row d-flex justify-content-between">
						<label htmlFor="apellido">Apellido: </label>
						<input className="form-control" type="text" name="apellido" onChange={handleChange} placeholder="Surname"></input>
					</div>
					<div className="form-row d-flex justify-content-between">
						<label htmlFor="username">Username: </label>
						<input className="form-control" type="text" name="username" onChange={handleChange} placeholder="Username"></input>
					</div>
					<div className="form-row d-flex justify-content-between">
						<label htmlFor="username">Contraseña: </label>
						<input className="form-control" type="password" name="password" onChange={handleChange} placeholder="Password"></input>
					</div>
					<div className="form-row d-flex justify-content-between">
						<label htmlFor="username">Email: </label>
						<input className="form-control" type="email" name="email" onChange={handleChange} placeholder="Email"></input>
					</div>
					<div className="form-row d-flex justify-content-between">
						<label htmlFor="username">Fecha nacimiento: </label>
						<input className="form-control" type="date" name="birthday" onChange={handleChange}></input>
					</div>
					<div className="form-row d-flex justify-content-center flex-column">
						{error && <p className="error">{error}</p>}
						<button className="btn btn-primary" type="submit">Sign Up</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;