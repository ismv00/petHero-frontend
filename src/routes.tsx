import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logon from './pages/logon';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logon />} />
      </Routes>
    </BrowserRouter>
  );
}
