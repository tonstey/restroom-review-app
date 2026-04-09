import { useNavigate } from "react-router";

import { FaCheck, FaRegMap } from "react-icons/fa";
import { MdOutlinePerson, MdOutlineRateReview } from "react-icons/md";

export default function EmailConfirmedPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-auto mt-8 w-156 rounded-xl border border-gray-200 px-8 py-8 shadow-xl">
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-full bg-green-400 p-2">
            <FaCheck className="text-5xl" />
          </div>

          <h1 className="text-2xl font-bold">Email verified!</h1>

          <p className="text-center text-sm font-semibold text-gray-500">
            Your account is now active. We've successfully verified
          </p>

          <button
            onClick={() => navigate("/")}
            className="mx-auto my-4 flex items-center gap-2 rounded-lg bg-[#1fb1f9] px-8 py-2 font-semibold hover:cursor-pointer hover:bg-[#069de8]"
          >
            <FaRegMap />
            Go to Home/Map
          </button>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-1 rounded border border-gray-300 px-4 py-1 text-sm font-semibold hover:cursor-pointer hover:bg-gray-200"
            >
              <MdOutlinePerson className="text-lg" />
              Complete Profile
            </button>
            <button className="flex items-center gap-1 rounded border border-gray-300 px-4 py-1 text-sm font-semibold hover:cursor-pointer hover:bg-gray-200">
              <MdOutlineRateReview className="text-lg" />
              View My Reviews
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
