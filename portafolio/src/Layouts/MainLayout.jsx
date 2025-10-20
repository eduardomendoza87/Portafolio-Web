// src/Layouts/MainLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    // ¡Añade clases de prueba aquí!
    <div className="main-layout bg-gray-900 text-white min-h-screen font-sans">
      <header className="header p-4 bg-gray-800">
        <h1 className="text-4xl font-bold text-cyan-400">Mi Portafolio (Test de Tailwind)</h1>
        <Link to="/" className="text-cyan-300 hover:underline mr-4">Home</Link>
        <Link to="/trabajos" className="text-cyan-300 hover:underline mr-4">Trabajos</Link>
        <Link to="/about" className="text-cyan-300 hover:underline mr-4">About Me</Link>
        <Link to="/contact" className="text-cyan-300 hover:underline">Contact</Link>
      </header>
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