from fastapi import FastAPI
from routes.app_route import app_routes

app = FastAPI()

app.include_router(app_routes, prefix="/api")

@app.get("/")
def read_root():
    return {"Server": "Is Running"}
