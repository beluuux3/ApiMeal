// src/pages/About.jsx
import CardAbout from "../components/CardAbout.jsx";

// Datos simulados del equipo
const teamMembers = [
  {
    name: "EDMUND",
    initials: "E",
    title: "Chef Principal",
    description:
      "Enfocado en la cocina tradicional, aporta la experiencia y el sabor clásico a todas nuestras recetas. Pasión por la carne y los estofados.",
  },
  {
    name: "MOISES",
    initials: "M",
    title: "Especialista Vegano",
    description:
      "Lidera la innovación en recetas sin productos animales, creando platos vibrantes y nutritivos. Experto en especias y gastronomía asiática.",
  },
  {
    name: "BELÉN",
    initials: "B",
    title: "Repostera y Pastelería",
    description:
      "Maestra en postres. Su misión es endulzar la vida con creaciones que combinan arte y sabor, desde pasteles clásicos hasta opciones keto.",
  },
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold text-primary-700 mb-4 text-center">
        <img src="" alt="" />
        Conoce a Nuestro Equipo
      </h1>
      <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        Somos un equipo apasionado dedicado a compartir las mejores recetas y
        trucos de cocina, adaptándonos a todos los gustos y niveles.
      </p>

      {/* Sección de Miembros del Equipo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <CardAbout key={member.name} member={member} />
        ))}
      </div>

      {/* Sección de Misión/Visión Adicional */}
      <div className="mt-16 pt-10 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Facilitar la cocina diaria, proporcionando instrucciones claras,
              ingredientes accesibles y deliciosas opciones para todos, desde el
              principiante hasta el chef experimentado.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestra Visión
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ser la fuente de recetas más confiable y amigable de internet,
              inspirando a millones de personas a cocinar en casa y explorar
              nuevas culturas gastronómicas.
            </p>
          </div>
        </div>
      </div>

      {/* Simulación de Enlaces Sociales Inferiores (como en tu maquetación) */}
      <div className="flex justify-center space-x-6 mt-12 pt-6 border-t border-gray-100">
        <a
          href="#"
          className="text-gray-400 hover:text-primary-500 transition"
        ></a>
        <a
          href="#"
          className="text-gray-400 hover:text-primary-500 transition"
        ></a>
        <a
          href="#"
          className="text-gray-400 hover:text-primary-500 transition"
        ></a>
        <a
          href="#"
          className="text-gray-400 hover:text-primary-500 transition"
        ></a>
      </div>
    </div>
  );
};

export default About;
