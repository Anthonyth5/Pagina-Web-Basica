import { Link } from "react-router";

export const Articulos_card = ({links, imageListP, p, imageListJ, j, titulo, titulo2, descripcion, nombre, fecha }) => {
    return (
        <a href={links}>
            <article className="card">
                <div className="head_card">
                    <img src={imageListJ[j]} alt={`Imagenportada`} />
                </div>
                        
                <div className="foot_card">
                    <div className="titulo_card">
                        <span>{ titulo }</span>
                    </div>
                    <div className="texto_card">
                        <h3> { titulo2 }</h3>
                        <p>{ descripcion }</p>
                    </div>
                    <div className="perfil_card">
                    <div className="img_perfil">
                            <img src={imageListP[p]} alt={`Imagenportada`} />
                        </div>
                        <div className="texto_perfil">
                            <span>{ nombre }</span>
                            <span>{ fecha }</span>
                        </div>
                    </div>
                </div>
            </article>
        </a>


);}