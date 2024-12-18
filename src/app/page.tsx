"use client"; 

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-gray-100 font-sans">
{/* Hero Section */}
<section
  id="hero"
  className="h-screen flex flex-col md:flex-row items-center justify-center text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black"
>
  {/* Text */}
  <div className="md:w-1/3 text-center md:text-left flex flex-col items-center md:items-start md:ml-52">
    <h1 className="text-5xl md:text-7xl font-extrabold text-white">
      Hola, soy <span className="text-blue-400">CiroDerito</span>
    </h1>
    <p className="text-xl md:text-2xl mt-4 text-gray-300">
      Desarrollador Full Stack, <span className="text-blue-400">especializado en Backend</span>
      <span className="ml-2 text-gray-400">
        <br/>
        <i className="fas fa-map-marker-alt"></i> Buenos Aires, Argentina
      </span>
    </p>
    <Link href="#projects">
      <button className="mt-6 px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-black/80  shadow-lg  transition duration-300">

        Ver mis proyectos
      </button>
    </Link>
  </div>

  {/* Image */}
  <div className="md:w-1/2 flex justify-center mt-2 md:mt-0">
    <Image 
      src="/profile.jpg"
      alt="CiroDerito"
      width={600}
      height={600}
      className="rounded-full shadow-lg max-w-xs md:max-w-sm opacity-70"
    />
  </div>
</section>


 

{/* About Section */}
<section
  id="about"
  className="py-16 px-4 bg-gradient-to-b from-blue-400 to-indigo-700 to-blue-900 text-center md:text-left min-h-screen relative"
>
  <div
    className="absolute top-0 right-0 w-1/2 h-full bg-cover"
    style={{
      backgroundImage: 'url(https://i.namu.wiki/i/X7RPRZJiL_bDk-b5yfaeCqEaINp3iwm7ngVhzN9LDg4hNjz0Bs3QTo7pgbCfGW3xp_sQZxMGUfnxBAXGNFwGKw.svg)',
      opacity: 0.2, 
      filter: 'grayscale(100%)', 
    }}
  ></div>

  <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 z-10 relative">
    {/* Descripción */}
    <div className="md:w-1/2 mt-16">
    <h2 className="text-5xl font-extrabold mb-4 text-white text-shadow-lg">
  Sobre <span className="text-green-400">Mí</span>
</h2>
<p className="text-xl text-gray-200 mb-6 leading-relaxed">
  Soy un desarrollador <span className="text-green-400">full stack</span> con un fuerte enfoque en el <span className="text-green-400">backend</span>. Me apasiona crear soluciones eficientes y escalables, siempre buscando mejorar la experiencia de usuario.
  <br />
  Completé el programa de formación intensiva en la <span className="text-green-400">UTN</span> en 2024, donde adquirí una sólida base en desarrollo web. Desde entonces, he estado trabajando en diversos proyectos, aplicando mis conocimientos y adquiriendo experiencia tanto en <span className="text-green-400">frontend</span> como en <span className="text-green-400">backend</span>. Actualmente, busco nuevas oportunidades, especialmente en el área de <span className="text-green-400">backend</span>, pero también estoy abierto a posiciones de <span className="text-green-400">frontend</span> o <span className="text-green-400">fullstack</span>.
  <br />
  Creo firmemente en la importancia del <span className="text-green-400">aprendizaje constante</span>, por lo que siempre estoy desarrollando nuevos proyectos, aprendiendo tecnologías emergentes y perfeccionando mis habilidades actuales para seguir creciendo profesionalmente.
</p>

{/* Text */}
<p className="text-lg font-semibold text-gray-300 mb-8 italic">
  Mi misión es llevar tus ideas al siguiente nivel, creando aplicaciones web robustas y escalables.
</p>


      <h3 className="text-2xl font-semibold text-white mb-4">Mis habilidades principales</h3>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
        <span className="bg-gray-700 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-600 hover:text-emerald-500 transition duration-300">
          Node.js
        </span>
        <span className="bg-gray-700 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-600 hover:text-blue-600 transition duration-300">
          TypeScript
        </span>
        <span className="bg-gray-700 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-600 transition hover:text-red-500 duration-300">
          Nest.js
        </span>
        <span className="bg-gray-700 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-600 hover:text-cyan-300 transition duration-300">
          Next.js
        </span>
        <span className="bg-gray-700 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-700 hover:text-green-400 transition duration-300">
          Express
        </span>
        <span className="bg-gray-700 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-600 hover:text-blue-400 transition duration-300">
          React
        </span>
        <span className="bg-gray-700 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-600 hover:text-pink-600 transition duration-300">
          GraphQL
        </span>
        <span className="bg-gray-700 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-600 hover:text-violet-400 transition duration-300">
          B1 English
        </span>
      </div>

      <a
        href="/Ciro Derito - Fullstack.pdf"
        download="CiroDerito_CV.pdf"
        className="inline-block mt-8 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-black/80 transition-all"
      >
        Descargar CV
      </a>
    </div>
  </div>
</section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
              Proyectos Destacados
            </h2>
            <div className="flex flex-col gap-12 items-center">

              {/* Project 1 */}
              <div
                data-aos="fade-up"
                className="w-full max-w-6xl flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <a href="https://github.com/CiroDerito/ecommerce" className="w-full flex flex-col md:flex-row" target="blank">
                  <Image 
                    src="/Ecommerce.jpeg"
                    alt="Proyecto 1"
                    
                    width={600}
                    height={600}
                    className="w-full h-80 md:h-96 "
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <h3 className="text-2xl font-bold text-blue-400">Ecommerce</h3>
                    <p className="text-gray-300 mt-2 text-lg">
                      API desarrollada con Nest.js que gestiona usuarios, productos y pedidos. Base de datos con PostgreSQL Implementa autenticación segura con JWT, está documentada con Swagger, y preparada para despliegues eficientes con Docker. Es una solución escalable y modular para tiendas en línea.
                    </p>
                  </div>
                </a>
              </div>

              {/* Project 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="w-full max-w-6xl flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <a href="https://github.com/henrydogtel/DogTelApp" className="w-full flex flex-col md:flex-row" target="blank">
                  <Image 
                    src="/Project2.jpeg"
                    alt="Proyecto 2"
                    
                    width={600}
                    height={500}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <h3 className="text-2xl font-bold text-blue-400">DogTel App</h3>
                    <p className="text-gray-300 mt-2 text-lg">
                      Plataforma desarrollada con NestJS y GraphQL, integrando Next.js, Context API y Tailwind CSS en el frontend. Base de datos con PostgreSQL. inicio de sesión con OAuth, gestión de imágenes con Cloudinary, notificaciones con Nodemailer, y una pasarela de pagos con Stripe. El flujo de la app ofrece renderizado condicional según el rol del usuario.
                    </p>
                  </div>
                </a>
              </div>

              {/* Project 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"                className="w-full max-w-6xl flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <a href="https://github.com/CiroDerito/barberApiRESTfull" className="w-full flex flex-col md:flex-row" target="blank">
                  <Image 
                    src="/Project3.jpeg"
                    alt="Proyecto 3"
                    
                    width={600}
                    height={600}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <h3 className="text-2xl font-bold text-blue-400">BarberApp Shifts</h3>
                    <p className="text-gray-300 mt-2 text-lg">
                      Aplicación para la gestión de turnos en barberías. Desarrollada con React.js y Redux en el frontend, y Node.js, Express, y MongoDB en el backend. Incluye verificaciones con JWT, ofreciendo una experiencia segura para agendar, visualizar y cancelar citas.
                    </p>
                  </div>
                </a>
              </div>

              {/* Project 4 */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="w-full max-w-6xl flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <a href="https://github.com/CiroDerito/api-RESTfull-js-express" className="w-full flex flex-col md:flex-row" target="blank">
                  <Image 
                    src="/Project4.jpeg"
                    alt="Proyecto 4"
                    
                    width={600}
                    height={600}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <h3 className="text-2xl font-bold text-blue-400">Cinema Hub</h3>
                    <p className="text-gray-300 mt-2 text-lg">
                      Aplicación de cine que permite a los usuarios agregar películas a su lista de favoritos y visualizarlas en la página principal, además de mostrar trailers de las películas seleccionadas. Desarrollada con Node.js, Express, y MongoDB en el backend, y utilizando JavaScript, HTML, CSS, y Bootstrap en el frontend para una experiencia dinámica y atractiva.
                    </p>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>

{/* Contact Section */}
<section id="contact" className="py-16 bg-gradient-to-b from-blue-500 to-indigo-900 text-center">
  <h2 className="text-4xl font-bold mb-6 text-white-400">¡Contáctame!</h2>
  <p className="text-gray-300 mb-10 text-sg md:text-sl">
  Actualmente me encuentro en búsqueda de nuevas oportunidades laborales. ¡Estoy abierto a proyectos freelance, colaboraciones o cualquier tipo de contrato!
  </p>
  <a
  href="mailto:deritociro.trabajo@gmail.com"
  className="px-8 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 hover:text-black/60 transition duration-300"
>
  Enviar un correo
</a>



  {/* Redes Sociales */}
  <div className="mt-8 flex justify-center space-x-6">
    <a
      href="https://www.linkedin.com/in/ciro-derito/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-600 transition duration-300"
    >
      <i className="fab fa-linkedin text-3xl"></i>
    </a>
    <a
      href="https://github.com/CiroDerito/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-green-800 transition duration-300"
    >
      <i className="fab fa-github text-3xl"></i>
    </a>
    <a
      href="https://www.instagram.com/_sphynx__/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-pink-500 transition duration-300"
    >
      <i className="fab fa-instagram text-3xl"></i>
    </a>
  </div>

  {/* Copyright */}
  <div className="mt-8 text-gray-400 text-sm">
    <p>© 2024 Ciro Derito</p>
  </div>
</section>


      </main>
    </>
  );
};

export default Home;
