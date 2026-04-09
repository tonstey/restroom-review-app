import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router";
import useWebSocket from "react-use-websocket";

import { chats } from "../../../data/chat";
import ChatMessage from "./ChatMessage";

import { BsFillSendFill } from "react-icons/bs";
import { LuPaperclip } from "react-icons/lu";

export default function ChatRoom() {
  const chatroom_id = Number(useParams().chatroomid);
  const chatroom_connection = useWebSocket(`${chatroom_id}`);

  const [chatdata, setChatData] = useState(
    chats.find((item) => item.chatroom_id === chatroom_id),
  );
  const [message, setMessage] = useState("");
  console.log(chatdata);

  const bottomMessages = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setChatData(chats.find((item) => item.chatroom_id === chatroom_id));
    setMessage("");
    return () => {
      chatroom_connection;
    };
  }, [chatroom_id]);

  useLayoutEffect(() => {
    if (!chatdata?.messages?.length) return;

    bottomMessages.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
  }, [chatroom_id, chatdata]);

  const onSendMessage = () => {
    chatroom_connection.sendMessage("hii");
  };

  return (
    <>
      <div className="ml-4 flex h-160 w-200 flex-col rounded-xl py-2 shadow-sm">
        <div className="w-full px-8 py-2">
          <h1 className="text-xl font-semibold">{chatdata?.recipient}</h1>
        </div>
        <hr className="h-0.5 border-none bg-gray-300" />
        <div className="flex w-full flex-1 flex-col justify-between overflow-y-auto px-12">
          <div className="h-full overflow-y-auto p-2">
            <div className="flex min-h-full flex-col justify-end gap-2">
              {chatdata?.messages.map((msg) => (
                <ChatMessage
                  details={msg}
                  key={msg.user + String(msg.timestamp)}
                />
              ))}
              <div ref={bottomMessages}></div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-2">
            <button className="rounded-xl p-2 hover:cursor-pointer hover:bg-gray-200">
              <LuPaperclip className="text-2xl" />
            </button>
            <input
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 rounded-xl border border-gray-400 px-3 py-2"
            />
            <button
              onClick={() => onSendMessage()}
              className="flex items-center rounded-xl bg-[#1fb1f9] p-2 hover:cursor-pointer hover:bg-[#4cc1fa]"
            >
              <BsFillSendFill className="text-2xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
