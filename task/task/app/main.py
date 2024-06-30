from fastapi import FastAPI
from routes.app import app_routes

app = FastAPI()

app.include_router(app_routes, prefix="/api")

@app.get("/")
def read_root():
    return {"Hello": "World"}
