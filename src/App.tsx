import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@/components/layouts/Layout';
import WithFileLayout from '@/components/layouts/WithFileLayout';
import CompressPage from '@/pages/compress/page';
import MainPage from '@/pages/main/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route element={<WithFileLayout />}>
            <Route path="/convert/image" element={null} />
            <Route path="/convert/svg" element={null} />
            <Route path="/compress" element={<CompressPage />} />
            <Route path="/resize" element={null} />
            <Route path="/crop" element={null} />
            <Route path="/tools/transform" element={null} />
            <Route path="/tools/sprite-generator" element={null} />
          </Route>
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
