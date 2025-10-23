import { create } from 'zustand';

import { getCanvasSupportFormats, getImgSupportFormats } from '@/shared/image-util';

interface SupportFormatStore {
  imgSupportFormats: string[];
  canvasSupportFormats: string[];
  setImgSupportFormats: (formats: string[]) => void;
  setCanvasSupportFormats: (formats: string[]) => void;
}

const useSupportFormatStore = create<SupportFormatStore>((set) => ({
  imgSupportFormats: [],
  canvasSupportFormats: getCanvasSupportFormats(),
  setImgSupportFormats: (formats: string[]) => set({ imgSupportFormats: formats }),
  setCanvasSupportFormats: (formats: string[]) => set({ canvasSupportFormats: formats }),
}));

getImgSupportFormats().then((formats) => useSupportFormatStore.setState({ imgSupportFormats: formats }));

export default useSupportFormatStore;
