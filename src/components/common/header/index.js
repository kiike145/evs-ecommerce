import "./header.css";
import cart from "../header/cart.svg";
import Logout from "../../logout";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = () => {

    const isLogged = sessionStorage.getItem("isLogged");

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-around" expand="md">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    {isLogged === "true" ? <Logout /> : <Nav.Link href="/login">Log In</Nav.Link>}
                    <Nav.Link href="/cart"> <img src={cart} alt="Icono del carro"></img></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Headers;