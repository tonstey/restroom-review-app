import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { Ring2 } from "ldrs/react";
import "ldrs/react/Ring2.css";

export default function EmailNavigationPage() {
  const location = useLocation();
  const hash = location.hash;
  console.log(location);
  console.log(hash);

  const params = new URLSearchParams(hash.replace("#", ""));
  const access = params.get("access_token");
  const refresh = params.get("refresh_token");

  const navigate = useNavigate();
  useEffect(() => {
    if (access && refresh) {
      navigate("/signup/verified");
    } else {
      navigate("/signup/failed");
    }
  }, []);

  return (
    <>
      <div className="mt-10 flex w-full justify-center">
        <Ring2 size={80} stroke={10} />
      </div>
    </>
  );
}
