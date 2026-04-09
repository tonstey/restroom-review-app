def supabase_auth_error(code: str) -> tuple[int, str]:
  match code:
    # Input validation
    case "email_address_invalid":
      return (400, "Invalid email address format.")
    case "weak_password":
      return (400, "Password does not meet security requirements.")

    # Conflicts
    case "email_exists" | "user_already_exists":
      return (409, "An account with this email already exists.")

    # Authentication failures
    case "invalid_credentials":
      return (401, "Invalid email or password.")
    case "session_not_found" | "session_expired":
      return (401, "Session expired. Please log in again.")
    case "refresh_token_already_used" | "refresh_token_not_found":
      return (401, "Invalid or expired session. Please log in again.")

    # User lookup
    case "user_not_found":
      return (404, "User not found.")


    # Rate limits
    case "over_email_send_rate_limit" | "over_sms_send_rate_limit":
      return (429, "Too many attempts. Please try again later.")
    case "over_request_rate_limit":
      return (429, "Too many requests. Please slow down.")

    # Timeouts 
    case "request_timeout":
      return (408, "Request timed out. Please try again.")

    # Fallback
    case _:
      return (500, "Internal server error. Please try again later.")

