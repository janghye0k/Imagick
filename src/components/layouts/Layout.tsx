import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

import { getCanvasSupportFormats, getImgSupportFormats } from '@/shared/image-util';

import Header from './Header';

const Layout = () => {
  const [imgSupportFormats, setImgSupportFormats] = useState<string[]>([]);
  const [canvasSupportFormats] = useState<string[]>(getCanvasSupportFormats());

  useEffect(() => {
    getImgSupportFormats().then((formats) => setImgSupportFormats(formats));
  }, []);

  return (
    <>
      <Header />
      <main className="w-app mx-auto">
        <Outlet context={{ imgSupportFormats, canvasSupportFormats }} />
      </main>
    </>
  );
};

export default Layout;
