import { Link } from "react-router";

export default function ChatPreview({
  preview,
  isFocused,
}: {
  preview: any;
  isFocused: boolean;
}) {
  return (
    <>
      <Link to={`/chat/${preview.chatroom_id}`} key={preview.chatroom_id}>
        <hr className="h-0.5 border-none bg-gray-300" />
        <div className={`px-8 py-2 ${isFocused ? "bg-[#f0faff]" : "bg-none"}`}>
          <div>
            <img src="" className="rounded-full bg-black" />
          </div>
          <div>
            <h1
              className={`font-semibold ${isFocused ? "text-[#1fb1f9]" : "text-black"}`}
            >
              {preview.recipient}
            </h1>
            <p
              className={`w-full truncate text-sm ${isFocused ? "text-[#327596]" : "text-black"}`}
            >
              {preview.messages.at(-1).message}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
