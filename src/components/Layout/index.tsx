import React from 'react';
import { cn } from '@/lib/utils';
import styles from './index.module.css';
import { Link, useLocation } from 'react-router';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const links = [
  { to: '/convert', label: '이미지 변환' },
  { to: '/resize', label: '크기 조절' },
  { to: '/compression', label: '이미지 압축' },
  { to: '/transparent', label: '배경 제거' },
  { to: '/custom', label: '커스텀' },
];

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className={cn(styles.wrapper)}>
      <header className={cn(styles.header, 'shadow-md')}>
        <Link to="/">
          <h1 className={cn('logo', 'text-3xl', 'text-slate-800')}>Imagick</h1>
        </Link>
        <nav
          className={cn('flex', 'items-center', 'ml-auto', 'text-xs', 'gap-2')}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                styles['nav-link'],
                location.pathname.startsWith(link.to)
                  ? 'text-sky-600'
                  : 'hover:text-sky-600'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className={cn(styles.main, 'bg-zinc-100')}>{children}</main>
      <footer className={cn(styles.footer, 'border-t', 'border-zinc-300/50')}>
        <div className={cn('text-xs', 'text-zinc-500', 'font-semibold')}>
          © JangHyeok Kim - <span className="logo">Imagick</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
