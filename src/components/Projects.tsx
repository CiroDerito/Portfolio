interface Project {
    title: string;
    description: string;
    url: string;
  }
  
  const projects: Project[] = [
    {
      title: "Mi Portafolio",
      description: "Un portafolio hecho con Next.js y Tailwind CSS.",
      url: "https://github.com/CiroDerito/mi-portafolio",
    },
    {
      title: "E-Commerce",
      description: "Una tienda en línea con carrito y pasarela de pago.",
      url: "https://github.com/CiroDerito/e-commerce",
    },
    {
      title: "Blog Personal",
      description: "Un blog donde comparto mis aprendizajes.",
      url: "https://github.com/CiroDerito/blog",
    },
  ];
  
  const Projects: React.FC = () => {
    return (
      <section className="py-16 flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-200 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white-800">
            Mis Proyectos
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-400 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ver Proyecto
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  