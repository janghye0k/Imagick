import { Outlet } from 'react-router';

import Header from '@/components/layouts/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-app mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
