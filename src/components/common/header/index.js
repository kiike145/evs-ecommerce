import "./header.css";
import cart from "../header/cart.svg";

const Headers = () => {

    const isLogged = localStorage.getItem("isLogged");

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Products</a>
                        </li>

                        {
                            isLogged ? (
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#">Jeje</a>
                                </li>
                            ) : (
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="/login">Log In</a>
                                </li>
                            )
                        }
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/cart"><img src={cart} alt="Icono del carro"></img></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Headers;