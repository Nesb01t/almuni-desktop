import React, { ComponentType, useState } from "react";
import { Icon } from "@iconify/react";
import { MenuTab } from "./components/menu-tab";
import { closeApplication } from "@/utils/window";
import { ThemeController } from "@/components/theme";
import { MenuBtn } from "@/components/titlebar/components/menu-btn";

export enum MenuTabType {
  LIST = "list",
  BOARD = "board",
  PROFILE = "profile"
}

export interface IMenuTab {
  label: string;
  value: MenuTabType;
  icon?: ComponentType;
}

export const menuTabs: IMenuTab[] = [
  {
    label: "班级",
    value: MenuTabType.LIST
  },
  {
    label: "信息板",
    value: MenuTabType.BOARD
  },
  {
    label: "我的",
    value: MenuTabType.PROFILE
  }
];

export const DEFAULT_ACTIVE_TAB = menuTabs[0];

interface IProps {
  onTabClick: (tab: IMenuTab) => void;
}

export const Titlebar: React.FC<IProps> = ({ onTabClick }) => {

  const [activeTab, setActiveTab] = useState<IMenuTab>(DEFAULT_ACTIVE_TAB);

  const handleTabClick = (tab: IMenuTab) => {
    setActiveTab(tab);
    onTabClick(tab);
  };
  // 没有交互的地方加上 drag-region
  return (
    <div data-tauri-drag-region className="navbar shadow-sm">
      {/* 左边 */}
      <div data-tauri-drag-region className="navbar-start">
        <a className="btn btn-ghost text-xl">Zust Cloud</a>
      </div>

      {/* 中间 */}
      <div data-tauri-drag-region className="navbar-center">
        <ul data-tauri-drag-region className="menu menu-horizontal bg-base-200 text-base rounded-box">
          {menuTabs.map((tab) => {
            return (
              <MenuTab tab={tab} active={tab == activeTab} onTabClick={handleTabClick} />
            );
          })}
        </ul>
      </div>

      {/* 右边 */}
      <div data-tauri-drag-region className="navbar-end">
        <MenuBtn><ThemeController size={20} /></MenuBtn>
        <MenuBtn>
          <Icon fontSize={20} icon="material-symbols:settings-applications-outline-rounded" />
        </MenuBtn>
        <MenuBtn onClick={() => closeApplication()}>
          <Icon fontSize={20} icon="material-symbols:exit-to-app" />
        </MenuBtn>
      </div>
    </div>
  );
};