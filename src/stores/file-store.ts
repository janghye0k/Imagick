import { addFilesWithLimits, getTotalBytes } from '@/lib/file';
import { create } from 'zustand';

export type UploadItem = {
  id: string;
  file: File;
  addedAt: number;
};

export type AddFilesError =
  | { code: 'MAX_FILES'; message: string }
  | { code: 'FILE_TOO_LARGE'; message: string; fileName: string; size: number; max: number }
  | { code: 'TOTAL_TOO_LARGE'; message: string; attemptedTotal: number; max: number };

export type AddFilesResult = {
  added: UploadItem[];
  errors: AddFilesError[];
};

export interface FileStoreType {
  /** 업로드된 파일 목록 */
  items: UploadItem[];
  /** 업로드된 파일 용량 총합 */
  totalBytes: number;
  /** 파일 추가 */
  addFiles: (files: FileList | File[]) => AddFilesResult;
  /** 파일 삭제 */
  removeById: (id: string) => void;
  /** 모든 파일 삭제 */
  clear: () => void;
}

export const useFileStore = create<FileStoreType>((set, get) => ({
  items: [],
  totalBytes: 0,
  addFiles: (files) => {
    const result = addFilesWithLimits(get().items, files);
    const nextItems = [...get().items, ...result.added];
    set({ items: nextItems, totalBytes: getTotalBytes(nextItems) });
    return result;
  },
  removeById: (id) => {
    const nextItems = get().items.filter((item) => item.id !== id);
    set({ items: nextItems, totalBytes: getTotalBytes(nextItems) });
  },
  clear: () => {
    set({ items: [], totalBytes: 0 });
  },
}));
