import "./header.css";

const Headers = () => {
    return (
        <nav className="barraNavegacion header">
            <a href="/">Home</a>
            <a href="#">Products</a>
            <a href="/login">Log In/Sign Up</a>
            <a href="#">Carrito</a>
        </nav>
    );
};

export default Headers;