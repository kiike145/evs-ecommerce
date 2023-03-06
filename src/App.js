import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./components/home";
import FormLogin from "./components/formLogin";
import FormSignUp from "./components/formSignUp";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<FormLogin />} />
					<Route path="/signup" element={<FormSignUp />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
