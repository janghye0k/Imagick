import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';
import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
