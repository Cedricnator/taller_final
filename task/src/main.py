from fastapi import FastAPI
from routes.app_route import app_routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(app_routes, prefix="/api")


@app.get("/")
def read_root():
    return {"Server": "Is Running"}
