import { create } from "zustand";
import { devtools } from "zustand/middleware"; // devTools

type BearStore = {
  bears: number;
  increaseBear: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<BearStore>()(
  devtools((set) => ({
    bears: 0,
    increaseBear: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))
);
