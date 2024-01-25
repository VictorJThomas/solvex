import { Project } from "@/types";
import { create } from "zustand";

type ViewStore = {
  isOpen: boolean;
  project: Project | null;
  onOpen: (project: Project) => void;
  onClose: () => void;
};

export const useView = create<ViewStore>((set) => ({
  isOpen: false,
  project: null,
  onOpen: (project: Project) => set({ isOpen: true, project }),
  onClose: () => set({ isOpen: false }),
}));
