import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@/components/layouts/Layout';
import MainPage from '@/pages/main/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
