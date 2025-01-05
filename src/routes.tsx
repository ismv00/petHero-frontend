import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
