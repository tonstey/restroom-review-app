export default function ChatMessage({ details }: { details: any }) {
  return (
    <>
      <div
        className={`flex w-full ${details.user === "Self" ? "justify-end" : "justify-start"}`}
      >
        <img />{" "}
        <div
          className={`flex w-[70%] flex-col gap-0.5 rounded-xl px-4 py-2 ${details.user === "Self" ? "bg-[#e8f7fe] text-[#3dbbfa]" : "bg-slate-200 text-black"}`}
        >
          {details.user != "Self" && (
            <h1 className="font-semibold">{details.user}</h1>
          )}
          <p className="text-sm">{details.message}</p>
          <h1 className="text-right text-xs font-semibold text-gray-500">
            {details.timestamp}
          </h1>
        </div>
      </div>
    </>
  );
}
