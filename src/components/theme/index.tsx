import React, { FC, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface IProps {
  size?: number;
}

export const ThemeController: FC<IProps> = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [theme]);

  const onChange = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center itemns-center">
      <label className="swap swap-rotate">
        <input type="checkbox" className="theme-controller" value={theme} onChange={onChange} />
        <Icon className="swap-on fill-current" fontSize={props.size ?? 20} icon="iconamoon:mode-light" />
        <Icon className="swap-off fill-current" fontSize={props.size ?? 20} icon="tdesign:mode-dark" />
      </label>
    </div>
  );
};