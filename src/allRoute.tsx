import { Route, Routes } from 'react-router-dom';

import RootLayout from './components/auth-unauth-routes/RootLayout';
export const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}></Route>
    </Routes>
  );
};
