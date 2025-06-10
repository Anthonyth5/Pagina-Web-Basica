import { useNavigate } from "react-router";

export function Texto_aleatorio() {
    const textos = [
        "Conoce sobre el desarrollo de videojuegos.",
        "El mundo del desarrollo de videojuegos",
        "Te mostramos como se desarrollan los juegos"
    ]
    
    const aleat = Math.random() * (textos.length)
    const text = Math.floor(aleat);

    return textos[text];
}


export function Cambio_Articulo({article}) {
    const navigate = useNavigate();

    const Cambio = () => {
        navigate({article})
    };

    return (
        <button id="boton_articulo" onClick={ Cambio }>Leer más</button> 
    );
};