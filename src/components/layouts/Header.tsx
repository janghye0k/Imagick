import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useEventListener } from 'usehooks-ts';

import '@/styles/theme.css';

import pkg from '@/../package.json';
import LogoSvg from '@/assets/images/logo.svg?react';
import AnimatedMenuButton from '@/components/buttons/AnimatedMenuButton.tsx';
import ThemeToggle from '@/components/inputs/ThemeToggle';
import { Separator } from '@/components/ui/separator';

import NavigationBar from './NavigationBar';
import NavigationDrawer from './NavigationDrawer';

const REPO_URL = pkg.author.url + '/' + pkg.name;

const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      setTimeout(() => setIsMenuOpen(false), 0);
    };
  }, [location.pathname]);

  useEventListener('resize', () => {
    const isPcView = window.innerWidth > 768;
    if (isPcView) setIsMenuOpen(false);
  });

  return (
    <header className="bg-card relative z-10 shadow-sm dark:border-b">
      <div className="max-w-app mx-auto flex h-14 items-center px-4">
        {/* LOGO */}
        <Link to="/" className="inline-flex items-center gap-2">
          <LogoSvg className="fill-primary size-5" />
          <span className="font-logo text-primary text-4xl">{pkg.name}</span>
        </Link>

        <div className="ml-auto flex items-center gap-4 max-md:hidden">
          <NavigationBar />

          <Separator orientation="vertical" style={{ height: '20px' }} />

          {/* THEME TOGGLE */}
          <ThemeToggle />

          <Separator orientation="vertical" style={{ height: '20px' }} />

          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" aria-label="Github Repository">
            <span className="github-mask bg-card inline-block size-5 opacity-75 transition-opacity hover:opacity-100"></span>
          </a>
        </div>

        <AnimatedMenuButton
          active={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-auto md:hidden"
        />
        <NavigationDrawer open={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
