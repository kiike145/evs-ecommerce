import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./components/home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
