import logging
from fastapi import HTTPException
from config.db_config import session
from dto.create_todo_dto import CreateTaskDTO
from models.task_model import Tasks

class TaskService:
    def create_task(self, create_task_dto: CreateTaskDTO):
        session.add(Tasks(title=create_task_dto.title, description=create_task_dto.description, done=create_task_dto.done))
        session.commit()
        return "todo_createddd"

    def get_task(self, id: int):
        try:
            task = session.query(Tasks).filter(Tasks.id == id).first()
            if task is None:
                raise HTTPException(status_code=401, detail="Task not found")
            return task
        except Exception as e:
            logging.error(str(e))
            return {"Se produjo un error al obtener una tarea, con el error": str(e)}

    def get_tasks(self):
        try:
            return session.query(Tasks).all()
        except Exception as e:
            logging.error(str(e))
            return {"error": str(e)}

    def update_task(self):
        pass

    def delete_task(self, id: int):
      try:
        task = session.query(Tasks).filter(Tasks.id == id).first()
        if task is None:
            raise HTTPException(status_code=401, detail="Task not found")
        session.delete(task)
        session.commit()
        return "Task deleted"
      except Exception as e:
        logging.error(str(e))
        return {"error": str(e)}

