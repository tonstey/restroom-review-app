import { useNavigate } from "react-router";

import { HiOutlineHome } from "react-icons/hi";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-100 flex-col items-center gap-2">
          <h1 className="text-6xl font-bold">404</h1>
          <h1 className="text-center text-xl font-bold">
            Wait ... where did everyone go?
          </h1>
          <p className="text-center text-gray-600">
            We tracked the coordinates to this location, but the trail went
            cold. The page you're looking for might have moved, or perhaps it's
            just out of service for a bit.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-3 flex items-center gap-2 rounded-full bg-[#1fb1f9] px-4 py-2 text-sm font-semibold text-white hover:cursor-pointer hover:bg-[#069de8]"
          >
            <HiOutlineHome className="text-lg" />
            Go to Home/Map
          </button>
        </div>
      </div>
    </>
  );
}
