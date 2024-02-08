import React from "react";
import { type IMenuTab } from "../index";

interface IProps {
  tab: IMenuTab;
  active: boolean;
  onTabClick: (tab: IMenuTab) => void;
}

export const MenuTab: React.FC<IProps> = ({ tab, active, onTabClick }) => {
  return (
    <li>
      <a
        onClick={() => onTabClick(tab)} className={active ? "active" : ""}>{tab.label}</a>
    </li>
  );
};