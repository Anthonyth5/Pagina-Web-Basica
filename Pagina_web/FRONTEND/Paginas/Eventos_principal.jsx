import { useNavigate } from "react-router";

export function Texto_aleatorio() {
    const  textos = [
        "Conoce sobre el desarrollo de videojuegos.",
        "El mundo del desarrollo de videojuegos",
        "te mostramos como se desarrollan los juegos"
    ]
    
    aleat = Math.random() * (textos.length)
    aleat = Math.floor(aleat);

    return textos[aleat];
}

export function Cambio() {
    useNavigate("/Articulos")
};

export function articulo_1() {
    useNavigate("/Articulos/Celeste")
};