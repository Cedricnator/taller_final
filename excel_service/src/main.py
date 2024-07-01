from fastapi import FastAPI
from routes.document_route import document
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.include_router(document, prefix="/document")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def hello_world():
   return { "Hello": "World"}

