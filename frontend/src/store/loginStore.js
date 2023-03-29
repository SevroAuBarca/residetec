import { create } from "zustand";

const useLoginStore = create((set) => ({
  login: {},
  setLogin: (data) => set((state) => ({ login: data })),
}));

export default useLoginStore;
