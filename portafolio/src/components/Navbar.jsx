import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo_EduTec from "../assets/Logo_EduTec.png";

// Iconos
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { MdWork, MdContactPhone } from 'react-icons/md';

const Navbar = () => {
    // Estado para manejar el menú móvil 
    const [isOpen, setIsOpen] = useState(false);

    //Definición de enlaces
    const links = [
        { name: "Inicio", path: "/", icon: <FaHome /> },
        { name: "Sobre mi", path: "/about", icon: <FaPerson /> },
        { name: "Proyectos", path: "/trabajos", icon: <MdWork /> },
        { name: "Contacto", path: "/contact", icon: <MdContactPhone /> },
    ];

    return (
      <nav className="bg-white text-cafeoscuro shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/*  Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img src={Logo_EduTec} alt="Logo" className="h-25 w-auto" />
              </NavLink>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    //  Clase condicional para el link activo 
                    className={
                      ({ isActive }) =>
                        "px-3 py-2 rounded-md text-sm font-medium " +
                        (isActive
                          ? "bg-cafeclaro text-white" 
                          : "text-cafeclaro hover:bg-fondo") 
                    }
                  >
                    {/*  Renderiza el icono y el nombre */}
                    <span className="mr-2 inline-block align-middle">
                      {link.icon}
                    </span>
                    <span className="inline-block align-middle">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/*  Botón de Hamburguesa  */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-cafeoscuro hover:bg-bg-soft focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú</span>
                {/*  Icono condicional */}
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* 4. Menú Móvil */}
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} 
                className={({ isActive }) =>
                  "block px-3 py-2 rounded-md text-base font-medium " +
                  (isActive
                    ? "bg-bg-soft text-text-cafeoscuro"
                    : "text-text-secondary hover:bg-bg-soft")
                }
              >
                <span className="mr-3 inline-block align-middle">
                  {link.icon}
                </span>
                <span className="inline-block align-middle">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    );
};

export default Navbar;