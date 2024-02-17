import React, { Component, FC, ReactNode } from "react";

interface IProps {
  label: string;
  children: ReactNode;

  [key: string]: any;
}

export const ProfileBlock: FC<IProps> = (props) => {
  return (
    <div className="profile__block" {...props}>
      <div className="profile__block-label">
        <p className="profile__block-label-text">
          {props.label}
        </p>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="flex items-center">
        {props.children}
      </div>
    </div>
  );
};