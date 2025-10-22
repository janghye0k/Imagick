import { isNil, isNull } from 'es-toolkit';
import { create } from 'zustand';

const getInitialColorSchema = () => {
  const localColorSchema = localStorage.getItem('imagick-color-schema') as 'light' | 'dark' | null;
  const defaultColorSchema = localColorSchema ?? 'light';
  if (!window.matchMedia || !isNull(defaultColorSchema)) return defaultColorSchema;
  const schemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
  return schemeMedia.matches ? 'dark' : 'light';
};

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: (theme?: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getInitialColorSchema(),
  toggleTheme: (theme?: Theme) => {
    if (!isNil(theme)) set({ theme });
    else set((state) => ({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' }));
  },
}));

useThemeStore.subscribe((state) => {
  if (!globalThis) return;
  const $body = document.querySelector('body');
  if (!$body) return;
  $body.classList[state.theme === 'dark' ? 'add' : 'remove']('dark');
});
