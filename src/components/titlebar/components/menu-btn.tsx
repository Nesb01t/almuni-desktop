import React, { FC, ReactNode } from "react";
import "../index.css";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
}

export const MenuBtn: FC<IProps> = (props) => {
  return (
    <a {...props} className="menu-btn">
      <div className="menu-btn__content">
        {props.children}
      </div>
    </a>
  );
};