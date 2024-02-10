import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null,
  setToken: (val: string | null) => void,
  authHeader: () => { Authorization: string } | {}
}

export const useAuthStore = create<AuthState>()(persist(
  (set, get) => ({
    token: null,
    setToken: (val) => {
      set({ token: val });
    },
    authHeader: () => {
      if (get().token) {
        return { Authorization: `Bearer ${get().token}` };
      }
      return {};
    }
  }),
  {
    name: "auth-storage"
  }
));