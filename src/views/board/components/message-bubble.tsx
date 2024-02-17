import React from "react";
import { Message } from "@/types/message";
import { convertDate } from "@/utils/date";

interface IProps {
  message: Message;
}

export const MessageBubble: React.FC<IProps> = ({ message }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-header mb-1">
        Obi-Wan Kenobi
        <time className="text-xs ml-2 opacity-50">{convertDate(message.time)}</time>
      </div>
      <div className="chat-bubble">{message.content}</div>
    </div>
  );
};