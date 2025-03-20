import MainPage from '@/pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@/components/Layout';
import NotFoundPage from '@/pages/NotFoundPage';
import UploadSection from './components/UploadSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<UploadSection />}>
            <Route index path="/" element={<MainPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
