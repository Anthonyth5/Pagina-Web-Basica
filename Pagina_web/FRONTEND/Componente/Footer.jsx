import "./../CSS/Componentes.css";
import imagen from "./../../IMAGENES/img/pinterest_icon.png";

const Footer = () => {
    return (
        <footer className="foot">
            <nav>
                <a href="Pagina.html">
                    <img src= {imagen} alt="" 
                    className="foot_img" />
                </a>
                <ul className="foot_menu">
                   <li>Contactanos</li> 
                </ul> 
            </nav>
        </footer>
    );
}

export default Footer