from fastapi import APIRouter
from routes.task_route import task

app_routes = APIRouter()

app_routes.include_router(task, prefix="/task")
