import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Klaim from './pages/klaim';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/klaim" element={<Klaim />} />
    </Routes>
  );
}

export default Main;
