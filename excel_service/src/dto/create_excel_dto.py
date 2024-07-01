from typing import List

from pydantic import BaseModel

class Product(BaseModel):
   product: str
   category: str
   stock: int
   price: int
   last_update: str

class CreateExcelDto(BaseModel):
   products: List[Product]
