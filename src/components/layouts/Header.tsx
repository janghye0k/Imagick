import { Link, NavLink } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AppText } from './AppText';
import { MenuIcon, MoonIcon, SunIcon } from 'lucide-react';
import { Disclosure, DisclosureContent } from '../ui/disclosure';
import Logo from '@/assets/logo.svg?react';

type NavItem = { to: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { to: '/convert', label: 'Convert' },
  { to: '/compress', label: 'Compress' },
  { to: '/resize', label: 'Resize' },
  { to: '/filter', label: 'Filter' },
  { to: '/crop', label: 'Crop' },
  { to: '/convert-svg', label: 'Convert SVG' },
  { to: '/transform', label: 'Transform' },
  { to: '/sprite', label: 'Sprite' },
];

function setRootDarkClass(isDark: boolean) {
  const root = document.documentElement;
  root.classList.toggle('dark', isDark);
}

function getSafeStorage(): Pick<Storage, 'getItem' | 'setItem'> | null {
  if (typeof localStorage === 'undefined') return null;
  if (typeof localStorage.getItem !== 'function') return null;
  if (typeof localStorage.setItem !== 'function') return null;
  return localStorage;
}

function getInitialDarkMode(): boolean {
  const storage = getSafeStorage();
  const stored = storage?.getItem('imagick:theme');
  if (stored === 'dark') return true;
  if (stored === 'light') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
}

export function Header() {
  const [isDark, setIsDark] = useState(() => getInitialDarkMode());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setRootDarkClass(isDark);
    getSafeStorage()?.setItem('imagick:theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const navLinkClassName = useMemo(
    () =>
      ({ isActive }: { isActive: boolean }) =>
        [
          'rounded-md px-3 py-2 text-sm font-medium transition-colors',
          isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5',
        ].join(' '),
    []
  );

  return (
    <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo className="h-6 w-6 fill-current" />
          <AppText>Imagick</AppText>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setIsDark((v) => !v)}
            aria-label="Toggle dark mode"
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <MenuIcon />
          </Button>
        </div>
      </div>

      <Disclosure open={isMobileMenuOpen}>
        <DisclosureContent className="border-t border-foreground/10 bg-background md:hidden">
          <nav className="mx-auto w-full max-w-6xl px-4 py-2" aria-label="Mobile primary">
            <div className="grid grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={navLinkClassName}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </DisclosureContent>
      </Disclosure>
    </header>
  );
}
