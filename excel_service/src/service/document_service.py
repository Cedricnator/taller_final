from openpyxl import Workbook
from io import BytesIO
from dto.create_excel_dto import CreateExcelDto

class DocumentService:
   def create_excel_file(self, items_list: CreateExcelDto):
      wb = Workbook()
      ws = wb.active
      col1 = ["MODEL", "DESCRIPTION", "PRICE", "STOCK"]
      for i in range(1, len(col1) + 1):
         ws.cell(row=1, column=i, value=col1[i-1])

      for item in items_list.products:
        # Extraer los valores de cada atributo del objeto
        row = [ item.name, item.description, item.price, item.stock ]
        # Añadir una nueva fila con los valores extraídos
        ws.append(row)

      excel_io = BytesIO()
      wb.save(excel_io)
      excel_io.seek(0)
      return excel_io