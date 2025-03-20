import { create } from 'zustand';

type SetFile = {
  (partial: File[] | ((state: File[]) => File[])): void;
  (state: File[] | ((state: File[]) => File[])): void;
};

export type FileState = {
  files: File[];
  block: boolean;
  setBlock: (block: boolean) => void;
  setFiles: SetFile;
  pushFile: (file: File) => void;
  removeFile: (file: File) => void;
  clear: () => void;
};

const useFileStore = create<FileState>((set, get) => ({
  files: [],
  block: false,
  setBlock: (block) => set({ block }),
  setFiles: (files) => {
    if (typeof files === 'function') {
      const exists = get().files;
      set({ files: files(exists) });
    } else set({ files });
  },
  pushFile: (file: File) => set((state) => ({ files: [...state.files, file] })),
  removeFile: (file: File) =>
    set((state) => ({ files: state.files.filter((f) => f !== file) })),
  clear: () => set({ files: [] }),
}));

export default useFileStore;
