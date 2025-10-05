from fastapi import FastAPI
from backend import models
from backend.database import engine
from backend.auth import router as auth_router
from backend.documents import router as documents_router
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS Middleware
origins = [
    "http://localhost:3000",  # Frontend URL
    "http://localhost:8000",  # Backend URL (for testing directly)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(documents_router, prefix="/documents", tags=["documents"])

@app.get("/")
async def root():
    return {"message": "Backend is running!"}