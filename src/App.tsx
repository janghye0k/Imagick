import Main from '@/pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
