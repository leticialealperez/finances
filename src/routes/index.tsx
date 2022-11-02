import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../config/layout/LayoutDefault';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} showHeader/>} />
        <Route path="/register" element={<Layout children={<Register />} showHeader={false}/>} />

        <Route path='*' element={<Layout children={<Home />} showHeader={false}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;