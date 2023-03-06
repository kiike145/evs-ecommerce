import { useState } from "react";

import "./signupForm.css";

const SignupForm = () => {

	const [error, setError] = useState([]); // Mostrarle los errores al usuario
	const [formState, setFormState] = useState({ // Datos por defecto del formulario (vacio)
		name: "",
		password: "",
		password2: ""
	});

	const handleChange = event => {
		setFormState({ // Creamos el objeto 
			...formState,
			[event.target.name]: event.target.value,
		});
	};

	const signUp = event => {
		event.preventDefault();
		setError("");

		if (formState.password !== formState.password2) {
			setError("Las contraseñas no coinciden");
			return;
		}
	};

	return (
		<form onSubmit={signUp}>
			<div className="form-group">
				<div className="form-row">
					<label htmlFor="username">Username: </label>
					<input type="text" name="name" onChange={handleChange} placeholder="Username"></input>
				</div>
				<div className="form-row">
					<label htmlFor="username">Password: </label>
					<input type="password" name="password" onChange={handleChange} placeholder="Password"></input>
				</div>
				<div className="form-row">
					<label htmlFor="username">Confirm Password: </label>
					<input type="password" name="password2" onChange={handleChange} placeholder="Confirm Password"></input>
				</div>
				{error && <p>{error}</p>}
				<button type="submit">Sign Up</button>
			</div>
		</form>
	);
};

export default SignupForm;