import { useParams } from "react-router";

import { FiMapPin } from "react-icons/fi";
import { MdOutlineShare, MdOutlineImage } from "react-icons/md";

export default function RestroomPage() {
  const id = useParams();
  console.log(id.id);

  return (
    <>
      <div className="flex w-full flex-col gap-10 px-40 py-10">
        <div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-3xl font-bold">RESTROOM NAME</h1>
            <h1 className="flex items-center gap-2 text-gray-700">
              <FiMapPin />
              111 Tankey St., Los Angeles, CA 52342
            </h1>
            <div className="flex items-center gap-2">
              <h1 className="rounded-full bg-[#1fb1f9] px-5 py-1 font-semibold text-white">
                0/5
              </h1>
              <div>stars</div>
              <h1 className="">(0 Reviews)</h1>
            </div>
            <div className="flex items-center">
              <button className="flex items-center border border-gray-600 hover:cursor-pointer hover:bg-gray-200">
                <MdOutlineShare />
                Share
              </button>
              <button className="flex items-center bg-[#1fb1f9] text-white hover:cursor-pointer hover:bg-[#0694da]">
                <MdOutlineImage />
                Add Photo
              </button>
            </div>
          </div>
          <img />
        </div>

        <div className="px-12 py-8 shadow-lg">
          <h1 className="mb-4 text-xl font-semibold">Detailed Ratings</h1>
          <div className="grid grid-cols-[12rem_4rem_1fr] grid-rows-4 items-center">
            <h1>Cleanliness</h1>
            <h1>2.6/5.0</h1>
            <div className="flex w-full">
              <hr
                style={{ width: `${(2.6 / 5.0) * 100.0}%` }}
                className={`h-2 rounded-l-full border-none bg-[#1fb1f9]`}
              />
              <hr
                style={{ width: `${100 - (2.6 / 5.0) * 100.0}%` }}
                className={`h-2 rounded-r-full border-none bg-[#ecf9fe]`}
              />
            </div>
            <h1>Accessibility</h1>
            <h1>4.8/5.0</h1>
            <div className="flex w-full">
              <hr
                style={{ width: `${(4.8 / 5.0) * 100.0}%` }}
                className={`h-2 rounded-l-full border-none bg-[#1fb1f9]`}
              />
              <hr
                style={{ width: `${100 - (4.8 / 5.0) * 100.0}%` }}
                className={`h-2 rounded-r-full border-none bg-[#ecf9fe]`}
              />
            </div>
            <h1>Safety</h1>
            <h1>4.2/5.0</h1>
            <div className="flex w-full">
              <hr
                style={{ width: `${(4.2 / 5.0) * 100.0}%` }}
                className={`h-2 rounded-l-full border-none bg-[#1fb1f9]`}
              />
              <hr
                style={{ width: `${100 - (4.2 / 5.0) * 100.0}%` }}
                className={`h-2 rounded-r-full border-none bg-[#ecf9fe]`}
              />
            </div>
            <h1>Amenities</h1>
            <h1>3.8/5.0</h1>
            <div className="flex w-full">
              <hr
                style={{ width: `${(3.8 / 5.0) * 100.0}%` }}
                className={`h-2 rounded-l-full border-none bg-[#1fb1f9]`}
              />
              <hr
                style={{ width: `${100 - (2.8 / 5.0) * 100.0}%` }}
                className={`h-2 rounded-r-full border-none bg-[#ecf9fe]`}
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold">User Reviews (0)</h1>
        </div>

        <div>
          <div>
            <h1>Write a Review</h1>
            <div>
              <h1>Your Rating:</h1>
            </div>
            <textarea></textarea>
          </div>
          <button>Submit Review</button>
        </div>
      </div>
    </>
  );
}
