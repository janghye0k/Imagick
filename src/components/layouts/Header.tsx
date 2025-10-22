import { Link } from 'react-router';

import '@/styles/theme.css';

import LogoSvg from '@/assets/images/logo.svg?react';
import { useThemeStore } from '@/stores/use-theme-store';

import { Separator } from '../ui/separator';
import NavigationBar from './NavigationBar';

const Header = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <header className="bg-card shadow-sm dark:border-b">
      <div className="max-w-app mx-auto flex h-14 items-center gap-4 px-4">
        {/* LOGO */}
        <Link to="/" className="inline-flex items-center gap-2">
          <LogoSvg className="fill-primary size-5" />
          <span className="font-logo text-primary text-4xl">Imagick</span>
        </Link>

        <NavigationBar className="ml-auto" />

        <Separator orientation="vertical" className="max-h-5" />

        {/* THEME TOGGLE */}
        <label
          role="switch"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          htmlFor="theme-toggle"
          className="bg-secondary relative inline-block h-[22px] w-10 cursor-pointer rounded-full border"
        >
          <input type="checkbox" id="theme-toggle" className="hidden" onChange={() => toggleTheme()} />
          <span className="theme-toggle-thumb bg-card text-card-foreground absolute top-px left-px inline-block size-[18px] rounded-full p-0.5 shadow-sm transition-transform"></span>
        </label>

        <Separator orientation="vertical" className="max-h-5" />

        <a
          href="https://github.com/janghye0k/Imagick"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Repository"
        >
          <span className="github-mask bg-card inline-block size-5 opacity-75 transition-opacity hover:opacity-100"></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
