import axios, { AxiosResponse } from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware"; // devTools

// INTERFACE
type BearStore = {
  bears: number;
  increaseBear: () => void;
  removeAllBears: () => void;
};

interface UserData {
  id: number;
  name: number;
}

interface DataStore {
  data: UserData[] | null;
  isLoading: boolean;
  error: Error | null;
  fetchData: () => Promise<void>;
}

// STORE
export const useBearStore = create<BearStore>()(
  devtools((set) => ({
    bears: 0,
    increaseBear: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))
);

export const useDataStore = create<DataStore>()(
  devtools((set) => ({
    data: null,
    isLoading: false,
    error: null,
    fetchData: async () => {
      set({ isLoading: true });
      try {
        const response: AxiosResponse<UserData[]> = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        set({ data: response.data, isLoading: false, error: null });
      } catch (error) {
        console.error("Error fetching data:", error);
        set({ isLoading: false });
      }
    },
  }))
);
