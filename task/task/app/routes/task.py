from typing import Union
from fastapi import APIRouter
from models.task import Tasks
# from models.db import DB_manager
from config.db import session
from dto.create_todo import CreateTaskDTO
import logging

task = APIRouter()

@task.post("/")
def create_task(create_task_dto: CreateTaskDTO):
      """
      create one task
      params: Object TaskDTO
      return: Object Task 
      """
      try:
            session.add(create_task_dto)
            session.commit()
            return "todo_createddd"
      except Exception as e:
            logging.error(str(e))
            return {"Se produjo un error al crear una tarea, con el error: ": str(e)}

@task.get("/{id}")
def get_task(id: int, q: Union[str, None] = None):
      """
      get one task
      params: int
      return: Object Task 
      """
      try:
            return "a"
      except Exception as e:
            logging.error(str(e))
            return {"Se produjo un error al obtener una tarea, con el error": str(e)}
            

@task.get("")
def get_tasks():
      try:
            return session.query(Tasks).all()
      except Exception as e:
            logging.error(str(e))
            return {"Se produjo un error al obtener todas las tareas, con el error: ": str(e)}