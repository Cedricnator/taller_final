from fastapi import APIRouter

document = APIRouter()

@document.get("/")
def get_document():
   return { "document": "Document 1" }


@document.post("/")
def postDocument():
   return { "document": "Document 1" }