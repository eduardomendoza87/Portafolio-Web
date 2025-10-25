import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Trabajos from '../Pages/Trabajos';
import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';
import ViewProject from '../Pages/ViewProject';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Rutas Hijas */}
          <Route index element={<Home />} />
          <Route path="trabajos" element={<Trabajos />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/proyectos/:projectId" element={<ViewProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;