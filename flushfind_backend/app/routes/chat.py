from fastapi import APIRouter, WebSocket


router = APIRouter(prefix="/chatroom", tags=["Chatroom"])



@router.post("/")
def create_chatroom():
  f = 1

@router.websocket("/websocket")
async def websocket(ws: WebSocket):
  await ws.accept()
  ws.receive()
  ws.send_json()
  f = 1