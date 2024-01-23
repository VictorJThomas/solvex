import { create } from "zustand";

type EditStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useEdit = create<EditStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
