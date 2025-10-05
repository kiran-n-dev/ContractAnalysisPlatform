from pydantic import BaseModel
from datetime import datetime

class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class Document(BaseModel):
    name: str
    key: str
    size: int
    last_modified: datetime

    class Config:
        orm_mode = True