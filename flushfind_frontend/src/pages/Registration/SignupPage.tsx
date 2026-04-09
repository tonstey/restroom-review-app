import { Link } from "react-router";

export default function SignupPage() {
  return (
    <>
      <div>
        <div>
          <div></div>
          <div>
            <h1>Create an account</h1>
            <h1>Start your journey to find the cleanest restrooms nearby.</h1>
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
          <div>
            <hr />
            <h1>OR CONTINUE WITH EMAIL</h1>
            <hr />
          </div>
          <div></div>
          <button>Create Account</button>
          <div>
            <h1>
              Already have an account? <Link to={"/login"}>Login</Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
