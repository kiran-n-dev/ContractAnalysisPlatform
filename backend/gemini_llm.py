import google.generativeai as genai
import os

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def get_gemini_response(prompt: str, document_content: str):
    try:
        model = genai.GenerativeModel('gemini-2.5-flash')
        response = model.generate_content(f"{prompt}\n\nDocument Content:\n{document_content}")
        return response.text
    except Exception as e:
        print(f"Error getting response from Gemini LLM: {e}")
        return None
