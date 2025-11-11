import { Routes, Route } from "react-router-dom";
// PPAGINAS
import Home from "./pages/Home.jsx";
import Recipe from "./pages/Recipe.jsx";
import Random from "./pages/Random.jsx";
import Categories from "./pages/Categories.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

//COMPONENTS
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdf8f2]">
      <Header />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />

          <Route path="/random" element={<Random />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<h1>ERROR 404 - Página no encontrada</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
