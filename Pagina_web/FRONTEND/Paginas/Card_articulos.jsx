export const Articulos = ({ imageListP, imageListJ, titulo, titulo2, descripcion, nombre, fecha }) => {
    return (
        <main>
            <section class="card_seccion">

                <article class="card">
                    <div class="head_card">
                        {imageListJ.map((src, i) => (
                            <img key={i} src={src} alt={`Imagen ${i}`} />
                        ))}
                    </div>
                    
                    <div class="foot_card">
                        <div class="titulo_card">
                            <span>{ titulo }</span>
                        </div>
                        <div class="texto_card">
                            <h3> { titulo2 }</h3>
                            <p>{ descripcion }</p>
                        </div>
                        <div class="perfil_card">
                            <div class="img_perfil">
                                {imageListJ.map((src, i) => (
                                    <img key={i} src={src} alt={`Imagen ${i}`} />
                                ))}
                            </div>
                            <div class="texto_perfil">
                                <span>{ nombre }</span>
                                <span>{ fecha }</span>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
);}