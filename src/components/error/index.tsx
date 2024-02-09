import React from "react";
import { Icon } from "@iconify/react";

interface IProps {
  refresh: () => void;
}

export const Error: React.FC<IProps> = ({ refresh }) => {
  return (
    <div className="error hero w-full h-full">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-4xl font-bold flex justify-center items-center gap-3"><Icon icon="twemoji:empty-nest" />出错了</h1>
          <p className="pt-4">似乎加载失败了，请检查和服务端的网络连接情况 ~</p>
          <p className="pb-4">点击下方按钮重试一次吧</p>
          <button className="btn btn-error" onClick={refresh}>重试一下</button>
        </div>
      </div>
    </div>
  );
};