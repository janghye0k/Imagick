import { cn } from '@/lib/utils';
import styles from './index.module.css';
import { Link, Outlet } from 'react-router';
import { Toaster } from 'sonner';

function Layout() {
  return (
    <div className={cn(styles.wrapper)}>
      <header
        className={cn(styles.header, 'shadow-md')}
        onDragStart={(e) => e.preventDefault()}
      >
        <Link to="/">
          <h1 className={cn('logo', 'text-3xl', 'text-slate-800')}>Imagick</h1>
        </Link>
        <div
          className={cn('flex', 'items-center', 'ml-auto', 'text-xs', 'gap-2')}
        ></div>
      </header>
      <main className={cn(styles.main, 'bg-zinc-100', 'flex')}>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <footer
        className={cn(styles.footer, 'border-t', 'border-zinc-300/50')}
        onDragStart={(e) => e.preventDefault()}
      >
        <div className={cn('text-xs', 'text-zinc-500', 'font-semibold')}>
          © JangHyeok Kim - <span className="logo">Imagick</span>
        </div>
      </footer>
      <Toaster richColors closeButton />
    </div>
  );
}

export default Layout;
