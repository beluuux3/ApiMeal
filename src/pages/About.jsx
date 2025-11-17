// src/pages/About.jsx
import CardAbout from "../components/CardAbout.jsx";
import AboutUs from "../images/about/aboutus-bg.png";
import HeroAbout from "../components/HeroAbout.jsx";


const teamMembers = [
  {
    name: "EDMUND",
    initials: "E",
    title: "Head Bakery Specialist",
    description:(
      <>
        Edmund views baking as a highly flammable form of engineering. He meticulously measures his flour, salt, and accidental soot, aiming for maximum structural integrity in his cakes—which often results in creations dense enough to stop a bullet. His proudest achievement: inventing a loaf of sourdough so sturdy, it currently serves as a countertop in our break room. He's also been known to **overcook a perfectly cold bottle of water** just by looking at it intensely.
      </>
    )
  },
  {
    name: "MOISES",
    initials: "M",
    title: "Head Meat & Grill Specialist",
    description:(
      <>
        Moisés doesn't just grill; he engages in a primal, aggressive dialogue with the flames. He firmly believes any temperature below the melting point of stainless steel is "low and slow." His signature technique is the **"Flash-Fry & Flee,"** resulting in steaks that are either still mooing or have achieved a state of carbon-based singularity. His philosophy is so intense, he once managed to **simultaneously boil and freeze a bowl of soup** in a single, confusing moment.
      </>
    ),
  },
  {
    name: "BELÉN",
    initials: "B",
    title: "Head International Dishes Specialist",
    description:(
     <>
        Belén is the heart of our main courses, bringing enthusiastic, slightly reckless energy to every global cuisine she attempts. Her specialty is fusion cuisine that nobody asked for, like her infamous "Blackened Paella with Whipped Cream Snowcaps." She often confuses the terms "teaspoon" and "**cup**" when adding spices. She once tried to use a blowtorch to **toast a single grain of rice** for a dessert garnish, which is why we keep her focused on the entrées.
      </>
    )
  },
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <HeroAbout /><br/>
      <p className="text-L text-gray-600 mb-18 text-center max-w-3xl mx-auto">
        We are The Bundled Bunch, a one-of-a-kind crew fueled by passion... and maybe a little too much heat. We absolutely love crafting the best, most unforgettable dishes, achieving flavors so unique they redefine "gourmet." And yes, sometimes that unforgettable flavor is closer to char than cumin, but we call those "crispy flavor enhancements"! We promise our intentions are pure, even if our smoke detectors disagree.
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
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To offer a consistently surprising menu, utilizing the highest quality ingredients until they reach their maximum thermal capacity. We are dedicated to making food that’s impossible to forget—if only because of the powerful aroma.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be the most beloved and slightly feared culinary Bundle, inspiring others to cook with abandon and perhaps a better-maintained ventilation system.
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
