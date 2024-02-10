import React, { useMemo } from "react";
import { BaseWindow } from "./window/base-window";
import { useAuthStore } from "@/store/auth";
import { AuthWindow } from "@/window/auth-window";

function App() {
  const authStore = useAuthStore();
  const isLogin = useMemo<boolean>(() => {
    return authStore.token !== null;
  }, [authStore.token]);

  return (
    <>
      {isLogin ? (
        <BaseWindow />
      ) : (
        <AuthWindow />
      )}
    </>
  );
}

export default App;
