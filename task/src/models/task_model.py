from pydantic import BaseModel
from sqlalchemy import Column
from sqlalchemy.sql.sqltypes import Integer, String, Boolean
from sqlalchemy.orm import declarative_base

from config.db_config import engine

Base = declarative_base()

class Tasks(Base):
   __tablename__ = "tasks"

   id          = Column(Integer, primary_key=True, index=True) 
   title       = Column(String, index=True)
   description = Column(String, index=True)
   done        = Column(Boolean, index=True)

class Task(BaseModel):
   id: int
   title: str
   description: str
   done: bool



Base.metadata.create_all(engine)