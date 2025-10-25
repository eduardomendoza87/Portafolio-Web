
import React from "react";
import { useParams, Link } from "react-router-dom";

import CarruselFotos from "../components/carruselFotos";
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

const ViewProject = () => {
    //  Leemos el ID de la URL
    const { projectId } = useParams();

    //  Usamos .find() para obtener SÓLO el proyecto que queremos
    const proyecto = estudioProyecto.find(p => p.slug === projectId);

    //  Manejo de error si no se encuentra
    if (!proyecto) {
        return (
            <section className="bg-light p-8 min-h-screen text-center">
                <h1 className="text-4xl font-serif text-cafeoscuro">Proyecto no encontrado</h1>
                <Link to="/trabajos" className="text-accent-primary hover:underline mt-4 inline-block font-sans">
                    Volver a todos los proyectos
                </Link>
            </section>
        );
    }
    
    return (
        <section className="project-container bg-light p-8 md:px-16 lg:px-24 min-h-screen"> 
            
            {/* Título y Subtítulo  */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <img src={proyecto.imagen} alt={proyecto.titulo} className="w-48 h-48 object-contain mb-6 rounded-lg mx-auto"/>
                <h1 className="text-5xl font-serif text-cafeoscuro mb-4">{proyecto.titulo}</h1>
                <p className="text-xl font-sans text-secondary">{proyecto.resumen}</p>
            </div>

            {/* Botones  */}
            <div className="flex justify-center gap-4 mb-16">
                {/* Botón Primario */}
                <a 
                    href={proyecto.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cafebeige text-cafeclaro font-sans font-medium px-6 py-3 rounded-md hover:bg-cafebeige t transition-colors duration-300"
                >
                    Ver sitio web
                </a>
                {/* Botón Secundario  */}
                <a 
                    href={proyecto.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-transparent text-cafeclaro font-sans font-medium px-6 py-3 rounded-md border border-accent-primary hover:bg-cafebeige t transition-colors duration-300"
                >
                    Ver codigo
                </a>
            </div>

            {/* Contenido (Layout de 2 columnas del mockup) */}
            <div className="max-w-5xl mx-auto space-y-12">
                
                {/* Sección Desafío */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <h2 className="md:w-1/3 text-3xl font-serif text-cafeoscuro sticky md:top-24">El desafio</h2>
                    <p className="md:w-2/3 font-sans text-secondary text-lg leading-relaxed">
                        {proyecto.desafio}
                    </p>
                </div>
                
                {/* Sección Solución */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <h2 className="md:w-1/3 text-3xl font-serif text-cafeoscuro sticky md:top-24">Mi solucion</h2>
                    <p className="md:w-2/3 font-sans text-secondary text-lg leading-relaxed">
                        {proyecto.solucion}
                    </p>
                </div>

                {/* Sección Stack */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <h2 className="md:w-1/3 text-3xl font-serif text-cafeoscuro sticky md:top-24">Stack Tecnologico</h2>
                    <div className="md:w-2/3 flex flex-wrap gap-4 text-4xl">
                        {proyecto.tecnologias.map((tech) => (
                            <div key={tech} className="text-secondary">
                                {stackIcons[tech] || tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sección del Carrusel */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <h2 className="md:w-1/3 text-3xl font-serif text-cafeoscuro sticky md:top-24">Imagenes del sitio web</h2>
                    <div className="md:w-2/3 w-full">
                        {/* Usamos el componente importado */}
                        <CarruselFotos images={proyecto.carouselImages} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ViewProject;