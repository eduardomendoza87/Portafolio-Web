
import React from 'react';

// Logos de Proyecto
import Logo_SmartCharge from "../assets/Logo_SmartCharge.jpg";
import Logo_EduTec from "../assets/Logo_EduTec.png";
import Logo_SazonAzteca from "../assets/Logo_SazonAzteca.png";

//Imagenes proyecto smartcharge
import homeSmartCharge from "../assets/Home_SmartCharge.png"

// ARRAY DE PROYECTOS 

export const estudioProyecto = [
  {
    id: 1,
    slug: "smartcharge",
    imagen: Logo_SmartCharge,
    titulo: "SmartCharge",
    resumen:
      "Aplicación web responsiva que optimiza la gestión de las estaciones de carga de vehículos eléctricos.",
    desafio:
      "La electromovilidad en México enfrenta un reto importante por la gestión ineficiente de las estaciones de carga públicas. Según el INEGI, en 2024, se registraron 24,270 vehículos eléctricos en el país... generando cuellos de botella operativos.",
    solucion:
      "La solución consiste en una aplicación web responsiva que optimiza la gestión... Se integra con módulos de Mapa Interactivo, Planificación de Carga, Cuidado de la Batería, Estadisticas y un sistema de reservas.",
    tecnologias: [
      "React",
      "Tailwind",
      "Node.js",
      "Mysql",
      "Vite",
      "Jira",
      "Figma",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/eduardomendoza87/SmartCharge-App-Web",
    carouselImages: [{ src: homeSmartCharge, alt: "Vista del dashboard" }],
  },
  {
    id: 2,
    slug: "el-agave",
    imagen: Logo_SazonAzteca,
    titulo: "El agave",
    resumen:
      "Aplicación web responsiva para con menu y sistema de ordenamiento para un restaurante mexicano.",
    desafio:
      "Últimamente en México han llegado miles de extranjeros y se han implementado comidas de diferentes países a la gastronomía del país, pero se ha olvidado la raíz y alimentos originarios de México.",
    solucion:
      "Diseñar y desarrollar un sitio web responsivo que sea accesible a los usuarios, y descubran de nuevo las raíces gastronómicas de México.",
    tecnologias: [
      "React",
      "Tailwind",
      "Node.js",
      "Mysql",
      "Vite",
      "Jira",
      "Figma",
    ],
    demoUrl: "#", // Reemplaza con tu enlace
    githubUrl: "#", // Reemplaza con tu enlace
    carouselImages: [], // Vacío si no hay
  },
  {
    id: 3,
    slug: "edutec",
    imagen: Logo_EduTec,
    titulo: "Portafolio web",
    resumen: "Portafolio web responsivo profesional.",
    desafio:
      "Buscaba tener mas visibilidad y atraer nuevos usuarios o empresas que requieran mis servicios.",
    solucion:
      "Realice un proceso de gestión de proyectos para hacer la pagina siguiendo la metodoligia scrum y aplicando mis conocimientos.",
    tecnologias: [
      "React",
      "Tailwind",
      "Node.js",
      "Mysql",
      "Vite",
      "Jira",
      "Figma",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/eduardomendoza87/portafolio-web-react",
    carouselImages: [],
  },
];