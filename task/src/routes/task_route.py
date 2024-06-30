from typing import Union
from fastapi import APIRouter, HTTPException
from models.task_model import Tasks
from config.db_config import session
from dto.create_todo_dto import CreateTaskDTO
from controller.task_controller import TaskController
from service.task_service import TaskService
import logging


task = APIRouter()
task_Service = TaskService()
task_Controller = TaskController(task_Service)

@task.post("/")
def create_task(create_task_dto: CreateTaskDTO):
    """
    create one task
    params: Object TaskDTO
    return: Object Task
    """
    try:
      return task_Controller.create_task(create_task_dto)
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
      return task_Controller.get_task(id)
    except Exception as e:
      logging.error(str(e))
      return {"Se produjo un error al obtener una tarea, con el error": str(e)}


@task.get("")
def get_tasks():
    """
    get all tasks
    params: None
    return: List[Task]
    """
    try:
      return task_Controller.get_tasks()
    except Exception as e:
      logging.error(str(e))
      return {
            "Se produjo un error al obtener todas las tareas, con el error: ": str(e)
      }

@task.delete("/{id}")
def delete_task(id: int):
   try:
      return task_Controller.delete_task(id)
   except Exception as e:
      logging.error(str(e))
      return {"se produjo un error: ": str(e)}