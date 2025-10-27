import React from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import fotoPerfil from "../assets/Foto_Perfil.webp"

const Home = () => {
  return (
    //  CONTENEDOR PRINCIPAL (HERO)
    <section className="flex flex-col md:flex-row lg:flex-none items-center justify-center min-h-[calc(100vh-64px)] px-8 md:px-16 lg:px-24">
      {/* --- COLUMNA IZQUIERDA: TEXTO --- */}
      <div className="md:w-1/2 text-center md:text-left">
        {/* Título: */}
        <h1 className="text-5xl lg:text-6xl font-serif text-cafeoscuro mb-4">
          Diseñador y Frontend Developer con enfoque en UX.
        </h1>

        {/* Subtítulo */}
        <p className="text-lg font-sans text-cafeclaro mb-8">
          Especializado en crear interfaces intuitivas y de alto rendimiento con
          React, Tailwind y creación de wireframes y prototipos en Figma.
        </p>

        {/* Botón:  */}
        <Link to={"/trabajos"}>
          <button className="bg-cafebeige text-colorclaro font-sans font-medium px-6 py-3 rounded-md hover:bg-cafeoscuro transition-colors duration-300">
            Ver Proyectos
          </button>
        </Link>
      </div>

      {/* --- COLUMNA DERECHA: IMAGEN --- */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
        {/* 4 Imagen */}
        <img
          src={fotoPerfil}
          alt="Eduardo Mendoza - Perfil"
          className="w-full max-w-sm lg:max-w-md h-auto rounded-lg shadow-xl object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
