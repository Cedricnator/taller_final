import uvicorn

host = "0.0.0.0"
port = 8081

if __name__ == "__main__":
    uvicorn.run("main:app", host=host, port=port, reload=True)
