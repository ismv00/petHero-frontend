import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logon />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
