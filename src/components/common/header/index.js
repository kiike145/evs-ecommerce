import "./header.css";
import cart from "../header/cart.svg";

const Headers = () => {
    return (
        <header>
            <nav className="barraNavegacion header">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/login">Log In</a>
                <a href="/cart"><img src={cart} alt="Icono del carro"></img></a>
            </nav>
        </header>
    );
};

export default Headers;