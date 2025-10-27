import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-light p-8 md:px-16 lg:px-24">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {/* Títulos  */}
        <h2 className="font-serif mb-4 text-4xl tracking-tight font-bold text-center text-cafeoscuro">
          Trabajemos juntos
        </h2>
        <p className="mb-8 lg:mb-16 font-sans text-center text-secondary sm:text-xl">
          ¿Tienes un proyecto en mente.....envíame un mensaje.
        </p>

        {/*  Apunta a Formspree */}
        <form
          action="https://formspree.io/f/xeorykrw"
          method="POST"
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Email  */}
            <div className="md:w-1/2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium font-sans text-secondary"
              >
                Tu email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-bg-soft border border-bg-soft text-cafeoscuro text-sm rounded-lg focus:ring-accent-primary focus:border-accent-primary block w-full p-2.5"
                placeholder="tu@email.com"
                required
              />
            </div>
            {/* Nombre */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium font-sans text-secondary"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm bg-bg-soft border border-bg-soft text-cafeoscuro text-sm rounded-lg focus:ring-accent-primary focus:border-accent-primary block w-full p-2.5"
                placeholder="Escribe tu nombre completo"
                required
              />
            </div>
          </div>

          {/* Mensaje  */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium font-sans text-secondary"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-cafeoscuro bg-bg-soft rounded-lg shadow-sm border border-bg-soft focus:ring-accent-primary focus:border-accent-primary"
              placeholder="Escribe un mensaje..."
            ></textarea>
          </div>

          {/* Boton de enviar mensaje*/}
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-cafeclaro rounded-lg bg-cafebeige sm:w-fit hover:text-cafeclaro focus:ring-4 focus:outline-none focus:ring-fondo border border-Cafeoscuro transition-colors duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      {/*  REDES SOCIALES CORREGIDAS  */}
      <div className="text-center">
        <p className="text-cafeoscuro text-2xl font-serif">o</p>
        <p className="text-cafeclaro text-lg font-sans mb-4">
          Encuéntrame en las siguientes redes sociales
        </p>
        <div className="flex items-center justify-center space-x-6 text-4xl text-cafeclaro">
          <a
            href="https://github.com/eduardomendoza87"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cafeclaro transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-mendoza-43aa1427a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BH0GI3FamQZSonYv%2BZ5sm2g%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cafeclaro transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
