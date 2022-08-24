from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/")
async def Root():
    return {"Mensagem": "Athenas - Hello World"}

@app.get("/status")
async def Status():
    return {"Status": "OK"}