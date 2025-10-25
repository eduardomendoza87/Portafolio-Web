// src/Layouts/MainLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const MainLayout = () => {
  return (
    // ¡Añade clases de prueba aquí!
    <div className="main-layout min-h-screen font-sans">
      <Navbar/>
      <main className="content p-4">
        <Outlet />
      </main>
      <footer className="footer p-4 text-center text-gray-500">
        <p>&copy; 2025 Mi Portafolio</p>
      </footer>
    </div>
  );
};

export default MainLayout;