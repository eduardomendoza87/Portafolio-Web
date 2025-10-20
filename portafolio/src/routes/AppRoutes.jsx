// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Trabajos from '../Pages/Trabajos';
import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          Ruta Padre: MainLayout ahora "envuelve" a todas las páginas hijas.
          El componente <Outlet /> en MainLayout renderizará la página hija.
        */}
        <Route path="/" element={<MainLayout />}>
          {/* Rutas Hijas */}
          <Route index element={<Home />} />
          <Route path="trabajos" element={<Trabajos />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;