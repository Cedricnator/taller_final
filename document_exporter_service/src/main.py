from fastapi import FastAPI
from routes.document_route import document
app = FastAPI()

app.include_router(document, prefix="/document")

@app.get("/")
def hello_world():
   return { "Hello": "World"}

