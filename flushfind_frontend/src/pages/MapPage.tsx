import { MapContainer, TileLayer, useMap } from "react-leaflet";

import { IoAddCircleOutline, IoSearch } from "react-icons/io5";

export default function MapPage() {
  return (
    <>
      <div className="flex w-full justify-center gap-4 px-4 py-8">
        <div className="flex w-84 flex-col gap-y-4 rounded-xl p-3 shadow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location or name..."
              className="w-full rounded-lg border border-gray-400 py-2 pl-8 text-sm"
            />
            <IoSearch className="absolute top-1/4 left-2 text-lg" />
          </div>
          <hr className="border-[0.5px] border-gray-300" />
          <div className="w-full">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1fb1f9] py-2 text-lg font-semibold text-white hover:cursor-pointer hover:bg-[#0694da]">
              <IoAddCircleOutline className="text-xl" />
              Add New Restroom
            </button>
          </div>
          <hr className="border-[0.5px] border-gray-300" />
          <div className="w-full">
            <h1 className="font-semibold">Restroom Results</h1>

            <div></div>
          </div>
        </div>
        <div className="h-[40rem] w-[36rem] overflow-hidden rounded-2xl shadow-2xl">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={20}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </>
  );
}
