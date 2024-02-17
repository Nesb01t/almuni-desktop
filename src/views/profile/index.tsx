import React from "react";
import "./index.css";
import { useMiscStore } from "@/store/misc";
import { useAuthStore } from "@/store/auth";
import { ProfileBlock } from "@/views/profile/block";

export const Profile = () => {
  const miscStore = useMiscStore();
  const authStore = useAuthStore();

  const logout = () => {
    if (authStore.logout()) {
      // todo maybe href
    }
  };
  return (
    <div className="profile">
      <ProfileBlock label="测试 Token" onClick={() => miscStore.setCount(miscStore.count + 1)}>
        <div className="mockup-code cursor-text">
          <pre data-prefix="$">misc test: {miscStore.count}</pre>
          <pre data-prefix="$"
               className="text-warning">test token: {authStore.token ? authStore.token?.slice(0, 10) + "..." : "null"}</pre>
        </div>
      </ProfileBlock>
      <ProfileBlock label="账号管理">
        <a className="btn" onClick={logout}>退出登录</a>
      </ProfileBlock>
    </div>
  );
};