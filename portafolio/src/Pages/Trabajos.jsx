
import React from "react";
import { Link } from "react-router-dom";

import { estudioProyecto } from "../data/proyectosData";

//Iconos
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiVite, SiJira } from 'react-icons/si';

//Mapeo de iconos
const stackIcons = {
    "React": <FaReact className="text-blue-500" title="React" />,
    "Node.js": <FaNodeJs className="text-green-500" title="Node.js" />,
    "Mysql": <SiMysql className="text-blue-600" title="Mysql" />,
    "Vite": <SiVite className="text-purple-500" title="Vite" />,
    "Jira": <SiJira className="text-blue-700" title="Jira" />,
    "Figma": <FaFigma className="text-red-500" title="Figma"/>,
    "Tailwind": <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />,
};

const Trabajos = () => {

  return (
    <div className="works-container bg-fondo p-8 md:px-16 lg:px-24">
      <h1 className="text-4xl text-center font-serif text-cafeoscuro mb-10">
        Mis proyectos
      </h1>

      {/*Mapeo de datos de proyectos*/}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-4">
        {estudioProyecto.map((trabajo) => (
          <div
            key={trabajo.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={trabajo.imagen}
              alt={trabajo.titulo}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-3xl font-semibold mb-2 font-serif text-cafeoscuro">
              {trabajo.titulo}
            </h2>
            <p className="font-sans mb-4 text-cafeclaro">{trabajo.resumen}</p>

            <h3 className="text-2xl font-semibold mb-3 font-serif text-cafeoscuro">
              Stack Tecnologico
            </h3>

            {/* Mapeo los iconos del stack */}
            <div className="flex flex-wrap gap-3 mb-6 text-3xl">
              {trabajo.tecnologias.map((tech) => (
                <div key={tech}>{stackIcons[tech] || tech}</div>
              ))}
            </div>
            {/*Boton para ver proyecto*/}
            <div className="flex items-center justify-center mt-auto">
              {/* Arreglo dinamico*/}
              <Link to={`/proyectos/${trabajo.slug}`}>
                <button className="bg-cafebeige text-cafeclaro font-sans font-medium px-6 py-3 rounded-md hover:bg-amber-100 transition-colors duration-300">
                  {" "}
                  Ver proyecto
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trabajos;