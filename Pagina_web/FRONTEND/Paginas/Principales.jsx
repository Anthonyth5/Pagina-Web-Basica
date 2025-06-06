import "./";
import imagen from "./../../IMAGENES/img/";
import { Texto_aleatorio, articulo_1, Cambio  } from "./Eventos_principal";


const Principal = () => {
    return (
        <main className="main">
            <section className="Banner">
                <h1>Videojuegos</h1>
                <h2 id="ban_titulo2">
                    <span>{ Texto_aleatorio }</span>
                </h2>
            </section>

            <sectio className="diapositiva">
                <div className="titulo_div">
                    <h2>Como se Crea un videojuego</h2>
                </div>
                <div className="pointDev">
                    <div className="bloque1">
                        <h3>Idea</h3>
                        <p>Las idea que forman al videojuego</p>
                    </div>
                    <div className="bloque2">
                        <h3>Codigo</h3>
                        <p>Las piezas que unen y dan vida al videojuego</p>
                    </div>
                    <div className="bloque3">
                        <h3>Historia</h3>
                        <p>Las historias que conforma el avance y trayectoria del jugador</p>
                    </div>
                    <div className="bloque4">
                        <h3>Jugadores</h3>
                        <p>Los usuarios que estaran jugando para darle vida</p>
                    </div>
                </div>
            </sectio>

            <section className="articulos">
                <div className="barra_articulos">
                    <h3>Articulos</h3>
                    <h4>Algunas curiosidades de los videojuegos</h4>
                </div>

                <article className="ban_articulo" style="background-image: url(crud_react/Celeste/fondo1.webp)">
                    <h5>Celeste un juego impresionante</h5>
                    <button id="Celeste" onClick={ articulo_1 }><p>Leer más</p></button>
                </article>

                <article className="ban_articulo" style="background-image: url(imgp/fondo9.jpg)">
                    <h5>Evolucion del desarrollo</h5>
                    <button id="boton_articulo" onClick={ Cambio }><p>Leer más</p></button> 
                </article>
            </section>
        </main>
    );
}

export default Principal