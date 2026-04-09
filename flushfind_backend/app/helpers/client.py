from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")


def create_supabase_client():
  supabase = create_client(url, key)
  return supabase

def get_supabase_session(access_token: str, refresh_token: str):
  supabase = create_client(url, key)
  supabase.auth.set_session(access_token=access_token, refresh_token=refresh_token)
  return supabase