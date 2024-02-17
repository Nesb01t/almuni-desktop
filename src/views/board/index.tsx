import React, { useEffect, useState } from "react";
import "./index.css";
import { Message } from "@/types/message";
import axios from "axios";
import { MessageBubble } from "@/views/board/components/message-bubble";

const fetchDataMessages = async () => {
  try {
    const res = await axios.get<Message[]>("http://localhost:8080/message/");
    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
};
export const Board = () => {
  const [messages, setMessages] = useState<Message[]>();

  const fetch = async () => {
    fetchDataMessages().then(data => {
        setMessages(data);
      }
    );
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="board">
      <div className="board__actions">
        <div className="text-md flex justify-center">筛选、确认及发送功能</div>
        <div className="text-md flex justify-center">正在迅速开发中，敬请期待！</div>
      </div>
      <div className="board__messages">
        {messages?.reverse()?.map(message => {
          return (
            <MessageBubble message={message} />
          );
        })}
      </div>
    </div>
  );
};