import React, { useState } from "react";
import "./index.css";
import { DEFAULT_ACTIVE_TAB, IMenuTab, MenuTabType, Titlebar } from "@/components/titlebar";
import { UserList } from "@/views/user-list";
import { Profile } from "@/views/profile";
import { Board } from "@/views/board";

export const BaseWindow = () => {
  const [activeTab, setActiveTab] = useState<IMenuTab>(DEFAULT_ACTIVE_TAB);
  return (
    <div className="base-window">
      <Titlebar onTabClick={setActiveTab} />

      {activeTab.value == MenuTabType.LIST && <UserList />}
      {activeTab.value == MenuTabType.BOARD && <Board />}
      {activeTab.value == MenuTabType.PROFILE && <Profile />}
    </div>
  );
};