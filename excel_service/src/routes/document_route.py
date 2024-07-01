from fastapi import APIRouter, Body
from fastapi.responses import StreamingResponse
from service.document_service import DocumentService 
from io import BytesIO
from dto.create_excel_dto import CreateExcelDto


document = APIRouter()
document_Service = DocumentService()

@document.post("/")
def generate_excel(create_excel_dto: CreateExcelDto = Body(...)):
   excel_io = document_Service.create_excel_file(create_excel_dto)
   return StreamingResponse(
         BytesIO(excel_io.getvalue()), 
         media_type='application/vnd.openxlmformats-officedocument.spreadsheetml.sheet', 
         headers={'Content-Disposition': 'attachment; filename="document.xlsx"'}
      )

