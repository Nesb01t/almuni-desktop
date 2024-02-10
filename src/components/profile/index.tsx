import React from "react";
import "./index.css";
import { useMiscStore } from "@/store/misc";
import { useAuthStore } from "@/store/auth";

export const Profile = () => {
  const miscStore = useMiscStore();
  const authStore = useAuthStore();
  return (
    <div className="profile">
      <div className="profile__variables" onClick={() => miscStore.setCount(miscStore.count + 1)}>
        <div className="mockup-code cursor-text">
          <pre data-prefix="$">misc test: {miscStore.count}</pre>
          <pre data-prefix="$"
               className="text-warning">test token: {authStore.token ? authStore.token?.slice(0, 10) + "..." : "null"}</pre>
        </div>
      </div>
    </div>
  );
};