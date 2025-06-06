import { Link } from "react-router";
import "./../CSS/Componentes.css";
import imagen from "./../../IMAGENES/img/Icono_principal.png";

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <a href="Pagina.html">
                    <img src= {imagen} alt="" 
                    className="nav_img" />
                </a>
                <div className="nav_menu">
                    <Link to="/">Contactanos</Link>
                    <Link to="/Contactanos">Contactanos</Link>
                    <Link to="/Nosotros">Nosotros</Link> 
                    <Link to="/Articulos">Articulos</Link>
                </div> 
            </nav>
        </header>
    );
}

export default Header