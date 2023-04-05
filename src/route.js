import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Klaim from './pages/klaim';
import Data from './pages/data'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/klaim" element={<Klaim />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default Main;
