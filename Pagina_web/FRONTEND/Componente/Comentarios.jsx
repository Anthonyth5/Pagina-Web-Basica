import { useState, useEffect } from 'react'
import { EncritacionService } from './Encriptacion';

function ComentariosItem({nombre, id, texto,  handlerDeleteBotton}){
  return(
    <article className='Datos_comentario'>
      <h3>{nombre}</h3>
      <p>ID: {id}</p>
      <p>Comentario: {texto}</p>
    </article>
  );
}

const func_Comentario = () => {
  const [comentarios, setComentarios] = useState([])
  const [dataForm, setDataForm] = useState({})
  const getComentarios = async () => {
    const allComentarios = await fetch("https://pagina-web-basica.onrender.com/api/v2/comentarios")
    const ComentarioJson = await allComentarios.json()
    //console.log(ComentariosJson)
    setComentarios(ComentarioJson)
  }

  const handlerFormInput = (e) =>{
    setDataForm(
      {
        ...dataForm,
        [e.target.name]: e.target.value
      }
    )
  }

  const handlerFormSubmit = async (e) =>{
    e.preventDefault();

    await fetch("https://pagina-web-basica.onrender.com/api/v2/comentarios"),{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataForm)
    }

    getComentarios();
  }

  const handlerDeleteBotton = async (id) =>{
      await fetch("https://pagina-web-basica.onrender.com/api/v2/comentarios/${id}"),{
      method: "DELETE"
    }
    getComentarios()
  }
  useEffect(() =>{
    getComentarios()
  })
  return (
    <>
      <form className='formulario' onSubmit={handlerFormSubmit}>
        <input className= 'form_id' type="text" name="id" 
        onChange= {handlerFormInput} value={dataForm.id} placeholder='ID...' required/>
        <input className= 'form_nombre' type="text" name="nombre" 
        onChange= {handlerFormInput} value={dataForm.nombre} placeholder='Nombre...' required/>
        <input className= 'form_texto' type="text" name="texto" 
        onChange= {handlerFormInput} value={dataForm.texto} placeholder='Comentario...' required/>
        
        <input className= 'form_crear' type="submit" value="Create" required/>
      </form>
        <div className='Comentario'>
          {
            comentarios.length === 0 ? "loader..." : comentarios.map(comentario =>(
              <ComentariosItem
                id={comentario.id}
                nombre={comentario.nombre}
                texto={comentario.texto}
                handlerDeleteBotton={() => handlerDeleteBotton(comentario.id)}
              />
            ))
          }
        </div>
    </>
  );
}
export default func_Comentario