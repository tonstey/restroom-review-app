from fastapi import Request, Response

def get_session_cookies(req:Request):
  access = req.cookies.get("flushfind-sb-access-token")
  refresh = req.cookies.get("flushfind-sb-refresh-token")
  return access,refresh

def set_session_cookies(access_token:str, refresh_token: str, res: Response):

  res.set_cookie(key="flushfind-sb-access-token", value=access_token, httponly=True, samesite="lax", max_age=60*60, path="/", secure=False)
  res.set_cookie(key="flushfind-sb-refresh-token", value=refresh_token, httponly=True, samesite="lax", max_age=60*60*24*7, path="/", secure=False)

def clear_session_cookies(res:Response):
  res.delete_cookie(key="flushfind-sb-access-token", path="/")
  res.delete_cookie(key="flushfind-sb-refresh-token", path="/")