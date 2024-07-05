from typing import List

from pydantic import BaseModel

class Product(BaseModel):
   name: str
   description: str
   price: int
   stock: int
class CreateExcelDto(BaseModel):
   products: List[Product]
