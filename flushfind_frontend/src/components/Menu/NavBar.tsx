import { FaToilet, FaRegMap, FaRegUser, FaRegComments } from "react-icons/fa";
import { Link, useLocation } from "react-router";

export default function NavBar() {
  const url = useLocation();

  return (
    <>
      <div className="flex w-full items-center justify-between px-12 py-3 shadow">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1fb1f9]">
              <FaToilet className="text-xl text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#1fb1f9]">FlushFind</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to={"/"}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-200 ${url.pathname === "/" ? "text-[#1fb1f9]" : "text-black"}`}
            >
              <FaRegMap className="text-xl" />
              <h1 className="text-md font-semibold">Map</h1>
            </Link>
            <Link
              to={"/profile"}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-200 ${url.pathname === "/profile" ? "text-[#1fb1f9]" : "text-black"}`}
            >
              <FaRegUser className="text-xl" />
              <h1 className="text-md font-semibold">Profile</h1>
            </Link>
            <Link
              to={"/chat"}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-200 ${url.pathname === "/chat" ? "text-[#1fb1f9]" : "text-black"}`}
            >
              <FaRegComments className="text-xl" />
              <h1 className="text-md font-semibold">Chat</h1>
            </Link>
          </div>
        </div>
        <div>
          <div>Not</div>
          <div>Img</div>
        </div>
      </div>
    </>
  );
}
