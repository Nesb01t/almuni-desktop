import React, { ComponentType, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { MenuTab } from "./components/menu-tab";

export interface IMenuTab {
  label: string;
  value: string;
  icon?: ComponentType;
}

export const menuTabs: IMenuTab[] = [
  {
    label: "班级",
    value: "list"
  },
  {
    label: "信息板",
    value: "board"
  },
  {
    label: "我的",
    value: "profile"
  }
];

export const Titlebar = () => {
  const defaultActiveTab = menuTabs[0];
  
  const [activeTab, setActiveTab] = useState<IMenuTab>(defaultActiveTab);

  // 没有交互的地方加上 drag-region
  return (
    <div data-tauri-drag-region className="navbar">
      {/* 左边 */}
      <div data-tauri-drag-region className="navbar-start">
        <a className="btn btn-ghost text-xl">Zust Cloud</a>
      </div>

      {/* 中间 */}
      <div data-tauri-drag-region className="navbar-center">
        <ul data-tauri-drag-region className="menu menu-horizontal bg-base-200 text-base rounded-box">
          {menuTabs.map((tab) => {
            return (
              <MenuTab tab={tab} active={tab == activeTab} onTabClick={setActiveTab} />
            );
          })}
        </ul>
      </div>

      {/* 右边 */}
      <div data-tauri-drag-region className="navbar-end">
        <a className="btn btn-ghost rounded-xl text-2xl"><Icon icon="material-symbols:exit-to-app" /></a>
      </div>
    </div>
  );
};