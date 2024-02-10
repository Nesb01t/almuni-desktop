import React from "react";
import { type User } from "@/types/user";
import { Icon } from "@iconify/react";
import "./user-item.css";

interface IProps {
  user: User;
}

export const UserItem: React.FC<IProps> = ({ user }) => {
  return (
    <div className="user-item collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />

      <div className="collapse-title text-lg font-medium">
        {user.name} <span className="text-sm font-normal text-gray-600 ml-1">{user.no}</span>
      </div>

      <div className="collapse-content user-item__content">
        <p><Icon icon="ic:round-class" />班级: {user.className}</p>
        <p><Icon icon="ic:round-meeting-room" />寝室: {user.roomName}</p>
        <p><Icon icon="tdesign:address-book" />籍贯: {user.birthPlace}</p>
        <p><Icon icon="material-symbols:phone-in-talk-outline" />手机: {user.phone}</p>
        <div><Icon icon="ic:baseline-room" />地址: {user.address}</div>
        <div><Icon icon="material-symbols:attach-email" />邮箱: {user.email}</div>
        <div><Icon icon="ic:baseline-wechat" />微信: {user.wechat}</div>
        <div><Icon icon="ri:qq-fill" />QQ号: {user.qq}</div>
        <div><Icon icon="tabler:message-code" />自我介绍: {user.selfResume}</div>
        <div><Icon icon="tabler:message-star" />管理留言: {user.adminResume}</div>
      </div>
    </div>
  );
};

