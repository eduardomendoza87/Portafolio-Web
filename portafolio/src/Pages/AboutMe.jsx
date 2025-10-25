import React from "react";

import FotoPerfil from "../assets/Foto_Perfil.jpg"

import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi';
import { SiJira } from 'react-icons/si';

const AboutMe = () => {
  const trayectoria = [
    {
      id: 1,
      titulo: "Educacion",
      descripcion: "Soy titulado de la carrera de ingenieria en sistemas computacionales con especializacion en Desarrollo de aplicaciones multiplataforma"
    },
    {
      id: 2,
      titulo: "Experiencia",
      descripcion: "Coca cola femsa Junio-septiembre 2025"
    },
    {
      id: 3,
      titulo: "Certificados",
      descripcion: "Google desing UX IBM Desarrollo frontend con react Google Gestion de proyectos agiles IT Scrum master Principios de Tailwind"
    }
  ];

  return (
    <section className="bg-fondo p-8 md:px-16 lg:px-24">
      <h1 className="text-4xl text-center font-serif text-cafeoscuro mb-12">
        Sobre mi
      </h1>

      {/* 3. SECCIÓN DE INTRO  */}
      {/* Usamos Flexbox: 'flex-col' (móvil) y 'md:flex-row' (desktop) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
        {/* Columna 1 */}
        <div className="md:w-1/2 text-left">
          <p className="text-xl font-sans text-secondary mb-8">
            Soy un desarrollador y diseñador enfocado en transformar la
            creatividad en aplicaciones funcionales que resuelvan problemas
            reales. Mi pasión por la tecnología se complementa con una fuerte
            disciplina por los procesos ágiles; utilizo Scrum, Jira y Notion
            para gestionar proyectos de forma organizada y eficiente, asegurando
            la calidad y la entrega a tiempo.
          </p>

          {/*4. BOTÓN */}

          <button className="bg-transparent text-cafeclaro font-sans font-medium px-6 py-3 rounded-md border border-cafeoscuro hover:bg-cafebeige transition-colors duration-300">
            Descargar CV
          </button>
        </div>

        {/*  Columna 2:  */}
        <div className="md:w-1/2 flex justify-center order-first md:order-last">
          <img
            src={FotoPerfil}
            alt="Foto de perfil de Eduardo Mendoza"
            className="rounded-lg shadow-xl w-full max-w-sm"
          />
        </div>
      </div>

      {/* --- SECCIÓN DE TRAYECTORIA --- */}
      <div className="mb-16">
        <h2 className="text-4xl text-center font-serif text-cafeoscuro mb-10">
          Mi trayectoria
        </h2>
        {/* Grid para activar responsividad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trayectoria.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-3xl font-semibold mb-2 font-serif text-cafeoscuro">
                {item.titulo}
              </h3>
              <p className="font-sans text-secondary">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE SKILLS DE DISEÑO */}
      <div className="mb-16">
        <h3 className="text-4xl text-center font-serif text-cafeoscuro mb-12">
          Skills de Diseño
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="bg-cafebeige text-cafeclaro text-lg font-medium px-4 py-1.5 rounded-md border border-cafeoscuro hover:border-fondo transition-colors">
            Wireframing
          </span>
          <span className="bg-cafebeige text-cafeclaro text-lg font-medium px-4 py-1.5 rounded-md border border-cafeoscuro hover:border-fondo transition-colors">
            Prototipado
          </span>
          <span className="bg-cafebeige text-cafeclaro text-lg font-medium px-4 py-1.5 rounded-md border border-cafeoscuro hover:border-fondo transition-colors">
            Diseño UX
          </span>
          <span className="bg-cafebeige text-cafeclaro text-lg font-medium px-4 py-1.5 rounded-md border border-cafeoscuro hover:border-fondo transition-colors">
            Figma
          </span>
        </div>
      </div>

      {/* SECCIÓN DE SKILLS TÉCNICOS */}
      <div>
        <h4 className="text-4xl text-center font-serif text-cafeoscuro mb-12">
          Skills Tecnicos
        </h4>
        <div className="flex flex-wrap items-center justify-center text-6xl gap-8 text-cafebeige">
          <FaReact
            title="React"
            className="hover:text-cafeoscuro transition-colors"
          />
          <BiLogoTailwindCss
            title="Tailwind CSS"
            className="hover:text-cafeoscuro transition-colors"
          />
          <FaHtml5
            title="HTML5"
            className="hover:text-cafeoscuro transition-colors"
          />
          <FaCss3Alt
            title="CSS3"
            className="hover:text-cafeoscuro transition-colors"
          />
          <BiLogoJavascript
            title="JavaScript"
            className="hover:text-cafeoscuro transition-colors"
          />
          <FaGitAlt
            title="Git"
            className="hover:text-cafeoscuro transition-colors"
          />
          <SiJira
            title="Jira"
            className="hover:text-cafeoscuro transition-colors"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;