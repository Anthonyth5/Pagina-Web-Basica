from pydantic import BaseModel
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import EncritacionService from './Encriptacion.js';

class comentario(BaseModel):
        id: EncritacionService.Encrypt(int)
        nombre: EncritacionService.Encrypt(str)
        texto: EncritacionService.Encrypt(str)

app = FastAPI()

origins = [
    "http://localhost:5173/",
]
app.add_middleware(
      CORSMiddleware,
      allow_origins= ["*"],
      allow_credentials=True,
      allow_methods = ["*"],
      allow_headers = ["*"],
)

comentario_db = [
    {
        "id" : 1,
        "nombre": "Anthonyth",
        "texto": "hola"
    },
    {
        "id" : 2,
        "nombre": "Camilo",
        "texto": "Super!"
    }
]
@app.get("/")
def roof():
      pass

@app.get("/api/v1/comentarios", response_model=list[comentario])
def get_comentario():
    return comentario_db
@app.get("/api/v1/comentarios/{comentario_id}", response_model=comentario)
def get_comentario(comentario_id: int):
        for comentario_t in comentario_db:
            if comentario_t["id"] == comentario_id:
                  return comentario_t
        raise hTTPException(status_code = 404, detail= "comentario no encontrado")

@app.post("/api/v1/comentarios", response_model=comentario)
def create_comentario(data_comentario: comentario):
      new_comentario = data_comentario.model_dump()
      comentario_db.append(new_comentario)
      return new_comentario

@app.delete("/api/v1/comentarios/{comentario_id}", response_model=comentario)
def delete_comentario(comentario_id: int):
        for comentario_t in comentario_db:
            if comentario_t["id"] == comentario_id:
                comentario_delete = comentario_t
                comentario_db.remove(comentario_t)
                return comentario_delete
        raise HTTPException(status_code = 404, detail= "comentario no encontrado")

