import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MiscState {
  count: number,
  setCount: (val: number) => void
}

export const useMiscStore = create<MiscState>()(persist(
  (set) => ({
    count: 0,
    setCount: (val) => {
      set({ count: val });
    }
  }),
  {
    name: "misc-storage"
  }
));