import "./footer.css";

import facebook from "../footer/facebook.svg";
import instagram from "../footer/instagram.svg";
import tiktok from "../footer/tiktok.svg";

const Footer = () => {
    return (
        <footer>
            <nav className="barraNavegacion footer">
                <a href="https://es-es.facebook.com/"><img src={facebook} alt="Icono de facebook"></img></a>
                <a href="https://www.instagram.com/"><img src={instagram} alt="Icono de instagram"></img></a>
                <a href="https://www.tiktok.com/es/"><img src={tiktok} alt="Icono de tiktok"></img></a>
            </nav>
        </footer>
    );
};

export default Footer;