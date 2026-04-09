import { Outlet, useMatch, Link } from "react-router";

import { IoSearch } from "react-icons/io5";
import { chats } from "../data/chat";
import ChatPreview from "../components/Chat/ChatRoom/ChatPreview";

export default function ChatPage() {
  const chatURL = useMatch("/chat/:chatroomid");
  console.log(chatURL);

  return (
    <>
      <div className="mt-16 flex w-full justify-center">
        <div className="w-108 rounded-lg border border-gray-100 py-2 shadow-lg">
          <h1 className="px-6 py-3 text-2xl font-bold">Chats</h1>
          <hr className="h-0.5 border-none bg-gray-300" />
          <div className="relative my-4 h-fit px-6">
            <input
              type="text"
              placeholder="Search conversations..."
              className="h-10 w-full rounded-lg border border-slate-300 pl-7"
            />
            <IoSearch className="absolute top-1/3 left-8" />
          </div>

          <div>
            {chats.map((item) => (
              <ChatPreview
                preview={item}
                isFocused={
                  Number(chatURL?.params.chatroomid) === item.chatroom_id
                }
              />
            ))}
          </div>
        </div>

        {!!chatURL ? (
          <Outlet />
        ) : (
          <div>Click on a chat to continue your conversation</div>
        )}
      </div>
    </>
  );
}
