from fastapi import APIRouter, Request, Response, status, HTTPException, Depends

from supabase import Client, AuthError

from helpers.errors import supabase_auth_error
from helpers.client import create_supabase_client, get_supabase_session
from helpers.cookies import get_session_cookies, set_session_cookies, clear_session_cookies

from models.users import SignUpRequest, LoginRequest
from pydantic import EmailStr

from dotenv import load_dotenv
import os

load_dotenv()

router = APIRouter(prefix="/user", tags=["Users"])

@router.get("/test")
def test():
  raise HTTPException(400, detail="test")


@router.get("/")
def get_user(req:Request, res:Response):
  try:
    acc, ref = get_session_cookies(req=req)
    sb = get_supabase_session(access_token=acc, refresh_token=ref)
    
    user_res = sb.auth.get_user()
    user = sb.table("users").select("*").eq("id", user_res.user.id)

    session_res = sb.auth.refresh_session()
    session = session_res.session

    if not user or not session:
      raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found.")

    set_session_cookies(access_token=session.access_token, refresh_token=session.refresh_token, res=res)

    return {"success": True, "data": user}

  except AuthError as e:
    raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e.message)
 



@router.post("/signup")
def signup(userInfo:SignUpRequest, sb:Client = Depends(create_supabase_client)):
  try:

    user_isTaken = sb.table("users").select("*").eq("username", userInfo.username).execute().data
    if user_isTaken:
      raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="Please choose a different username.")
    
    user_res = sb.auth.sign_up({
      "email": userInfo.email,
      "password": userInfo.password, 
      "options": {
        "email_redirect_to": os.environ.get("FRONTEND_URL") + "/signup/confirm"
      }
    })

    user = user_res.user

    if not user:
      raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="")

    sb.table("users").insert({"id": user.id,"username": userInfo.username}).execute()
    

    return {"success": True}
  except AuthError as e:
    print(str(e.args))
    print(str(e.code))
    print(str(e.message))
    print(str(e.name))
    if e.message == "email rate limit exceeded":
      raise HTTPException(status.HTTP_429_TOO_MANY_REQUESTS, detail="Please try again in an hour.")
    raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e.message)



@router.post("/verification/email")
def send_verification_email(email:EmailStr, sb:Client=Depends(create_supabase_client)):
  try:
    sb.auth.resend({
      "type": "signup", 
      "email": email,
      "options": {
        "email_redirect_to": os.environ.get("FRONTEND_URL") + "/signup/confirm"
      }})
    return {"success": True}
  except AuthError as e:
    if e.message == "email rate limit exceeded":
      raise HTTPException(status.HTTP_429_TOO_MANY_REQUESTS, detail="Please try again an hour.")
    raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e.message)
  

@router.post("/login")
def login(userInfo:LoginRequest, res:Response, sb:Client = Depends(create_supabase_client)):
  try:
    loginResponse = sb.auth.sign_in_with_password({"email": userInfo.email, "password": userInfo.password})
   
    session = loginResponse.session
    
    set_session_cookies(access_token=session.access_token, refresh_token=session.refresh_token, res=res)
    return {"success": True}
  except AuthError as e:
    print(str(e))
    raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e.message)
  except Exception as e:
    raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal server error. Please try again later.")

@router.post("/logout")
def logout_user(req:Request, res:Response):
  access_token, refresh_token = get_session_cookies(req)
  
  if not access_token or not refresh_token:
    raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="Missing tokens")

  try:
    sb = get_supabase_session(access_token, refresh_token)

    sb.auth.sign_out()
    clear_session_cookies(res)
  except AuthError as e:
    raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e.message)

