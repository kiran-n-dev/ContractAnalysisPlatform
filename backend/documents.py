from fastapi import APIRouter, Depends, File, UploadFile, HTTPException
from sqlalchemy.orm import Session
from typing import List
import json
import models
from schemas import Document
from database import get_db
from auth import get_current_user
from s3_utils import upload_file_to_s3, list_files_in_s3_folder, get_file_from_s3
from gemini_llm import get_gemini_response

router = APIRouter()

CUSTOM_PROMPT = """
Analyze the following contract text and provide a JSON object with three keys:
1.  `key_information`: Extract key information including parties involved, contract dates, monetary amounts, key terms and conditions, and important deadlines.
2.  `risk_assessment`: Identify potential legal risks, unfavorable terms, and red flags that require attention from legal teams.
3.  `summary`: Generate a concise executive summary highlighting the most critical points for quick review.

Return ONLY the JSON object.
"""

@router.post("/upload")
async def upload_document(file: UploadFile = File(...), current_user: models.User = Depends(get_current_user)):
    if not upload_file_to_s3(file.file.read(), file.filename, current_user.username):
        raise HTTPException(status_code=500, detail="Failed to upload file to S3")
    return {"message": "File uploaded successfully", "filename": file.filename}

@router.get("/list", response_model=List[Document])
async def list_documents(current_user: models.User = Depends(get_current_user)):
    files = list_files_in_s3_folder(current_user.username)
    return files

@router.post("/analyze")
async def analyze_document(file_key: str, current_user: models.User = Depends(get_current_user)):
    document_content = get_file_from_s3(file_key)
    if not document_content:
        raise HTTPException(status_code=404, detail="Document not found or failed to retrieve from S3")
    
    analysis_result_str = get_gemini_response(CUSTOM_PROMPT, document_content)
    if not analysis_result_str:
        raise HTTPException(status_code=500, detail="Failed to get analysis from Gemini LLM")
    
    try:
        analysis_result_json = json.loads(analysis_result_str)
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Failed to parse Gemini LLM response as JSON")
    
    return {"analysis": analysis_result_json}
