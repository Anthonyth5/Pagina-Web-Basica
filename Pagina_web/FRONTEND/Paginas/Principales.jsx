import { Texto_aleatorio, Cambio_Articulo } from "./Eventos_principal";
import { Articulos_card } from "./Card_articulos";
import imagen_fondo from "./../IMAGENES/imgP/fondo6.jpg";
const images_png = import.meta.glob('./../IMAGENES/imgP/*.png', { eager: true });
const images_jpg = import.meta.glob('./../IMAGENES/imgP/*.jpg', { eager: true });
const imageList_j = Object.values(images_jpg).map((mod) => mod.default);
const imageList_p = Object.values(images_png).map((mod) => mod.default);


export const Principal = () => {
    return (
        <main className="main">
            <section className="Banner">
                <h1>Videojuegos</h1>
                <h2 id="ban_titulo2">
                    <span>{Texto_aleatorio()}</span>
                </h2>
            </section>

            <section className="diapositiva">
                <div className="titulo_div">
                    <h2>Como se Crea un videojuego</h2>
                </div>
                <div className="pointDev">
                    <div className="bloque1 bloques">
                        <h3>Idea</h3>
                        <p>Las idea que forman al videojuego</p>
                    </div>
                    <div className="bloque2 bloques">
                        <h3>Codigo</h3>
                        <p>Las piezas que unen y dan vida al videojuego</p>
                    </div>
                    <div className="bloque3 bloques">
                        <h3>Historia</h3>
                        <p>Las historias que conforma el avance y trayectoria del jugador</p>
                    </div>
                    <div className="bloque4 bloques">
                        <h3>Jugadores</h3>
                        <p>Los usuarios que estaran jugando para darle vida</p>
                    </div>
                </div>
            </section>

            <section className="articulos">
                <div className="barra_articulos">
                    <h3>Articulos</h3>
                    <h4>Algunas curiosidades de los videojuegos</h4>
                </div>

                <article className="ban_articulo articulo_pricipal">
                    <h5>Celeste un juego impresionante</h5>
                    {Cambio_Articulo("/Articulos")}
                </article>

                <article className="ban_articulo article_segundario">
                    <h5>Evolucion del desarrollo</h5>
                    {Cambio_Articulo("/Articulos")}
                </article>
            </section>
        </main>
    );
}

export const Contactanos = () => {
    return (<></>);}

export const Nosotros = () => {
    return (<></>);}

export const Articulos = () => {
    return (
        <main>
            <section className="card_seccion">
                <Articulos_card links="/articulo_celeste.html" imageListP={imageList_p} p={1} imageListJ={imageList_j} j={1} titulo="Desarrollo" titulo2="Metodologia de desarrollo" descripcion="Hola mundo" nombre="Anthonyth" fecha="2/02/2025" /> 
            </section>
        </main>   
);}
