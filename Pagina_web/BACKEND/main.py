import os

from dotenv import load_dotenv

from pydantic import BaseModel
from fastapi import FastAPI, HTTPException, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
#uvicorn main:app --reload
from typing import Annotated
from sqlmodel import Field, Session, create_engine, select, SQLModel

load_dotenv()
#--------------------------------------------------
DATABASE_URL = os.environ.get("DATABASE_URL")

engine = create_engine(DATABASE_URL)

def create_db_and_tables():
     SQLModel.metadata.create_all(engine)

def get_session():
     with Session(engine) as session:
          yield session

session_dep = Annotated[Session, Depends(get_session)]

class comentario_user(SQLModel, table=True):
    user_id: int = Field(default= None, primary_key=True)
    user_name: str 
    user_comen: str

class articulos(SQLModel, table=True):
    id: int = Field(default= None, primary_key=True)
    Titulo: str
    texto: str
#--------------------------------------------------
app = FastAPI()

origins = ["http://localhost:5173/",]

app.add_middleware(
    CORSMiddleware,
    allow_origins= ["*"],
    allow_credentials=True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

#----------------------funciones-----------------------
@app.get("/")
def roof():
      pass

@app.on_event('startup')
async def on_startup():
     create_db_and_tables()

@app.get("/api/v2/comentarios", response_model=list[comentario_user])
def get_comentario(session: session_dep, offset: int = 0, limit: Annotated[int, Query(le=100)] = 100):
    comentario_Gr = session.exec(select(comentario_user).offset(offset).limit(limit)).all()
    return comentario_Gr

@app.get("/api/v2/comentarios/{comentario_id}", response_model=comentario_user)
def get_comentario(comentario_id: int, session: session_dep):
    CMT = session.get(comentario_user, comentario_id)
    if not CMT:
        raise HTTPException(status_code = 404, detail= "comentario no encontrado")
    return CMT

@app.post("/api/v2/comentarios", response_model=comentario_user)
def create_comentario(data_comentario: comentario_user, session: session_dep):
      new_comentario = comentario_user(**data_comentario.dict())
      session.add(new_comentario)
      session.commit()
      #session.refresh(new_comentario)
      return new_comentario

@app.delete("/api/v2/comentarios/{comentario_id}", response_model=comentario_user)
def delete_comentario(comentario_id: int, session: session_dep):
        CMT = session.get(comentario_user, comentario_id)
        if not CMT:
            raise HTTPException(status_code = 404, detail= "comentario no encontrado")
        session.delete(CMT)
        session.commit()
        return {"ok": True}
