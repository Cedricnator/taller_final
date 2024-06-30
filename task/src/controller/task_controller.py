from service.task_service import TaskService
from dto.create_todo_dto import CreateTaskDTO
class TaskController:
    def __init__(self, taskService: TaskService):
        self.taskService = taskService

    def get_tasks(self):
        return self.taskService.get_tasks()

    def get_task(self, id: int):
        return self.taskService.get_task(id)

    def create_task(self, create_task_dto: CreateTaskDTO):
        return self.taskService.create_task(create_task_dto)
    
    def delete_task(self, id: int):
        return self.taskService.delete_task(id)

    def update_task(self):
        pass