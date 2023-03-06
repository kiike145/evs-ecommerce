import "./header.css";

const Headers = () => {
    return (
        <nav className="barraNavegacion header">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/login">Log In</a>
            <a href="/cart">Carrito</a>
        </nav>
    );
};

export default Headers;