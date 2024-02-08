import React from "react";
import "./index.css";
import { Titlebar } from "../../components/titlebar";

export const BaseWindow = () => {
  return (
    <div className="base-window">
      <Titlebar></Titlebar>
    </div>
  );
};