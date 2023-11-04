import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Countries from './pages/Countries';
import Cities from './pages/Cities';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/cities" element={<Cities />} />
    </Routes>
  );
}

export default Router;
