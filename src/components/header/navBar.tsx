import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  showInfo: boolean;
  scrollToSection: (id: string) => void;
};

export default function Navbar({ showInfo, scrollToSection }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // handler que previene navegación por Link y hace scroll en la página
  const handleScrollLink =
    (id: string) =>
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e.preventDefault();
      setMenuOpen(false);
      scrollToSection(id);
    };

  return (
    <>
      <header
        className={`fixed left-0 w-full bg-white shadow-md z-40 transition-all duration-300
        ${showInfo ? "top-0 md:top-10" : "top-0"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" onClick={() => scrollToSection("")}>
            <img src="/img/logo2.png" className="h-12 w-auto" alt="Logo" />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-8 text-black font-medium">
            {/* Usamos <a> con href para accesibilidad, pero interceptamos el click */}
            <a href="#top" onClick={handleScrollLink("")} className="hover:text-yellow-500">
              Inicio
            </a>
            <a href="#services" onClick={handleScrollLink("services")} className="hover:text-yellow-500">
              Servicios
            </a>
            <a href="#contact" onClick={handleScrollLink("contact")} className="hover:text-yellow-500">
              Contáctanos
            </a>
            <a href="#about" onClick={handleScrollLink("about")} className="hover:text-yellow-500">
              Sobre nosotros
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
            <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Bottom sheet mobile */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-xl z-50 p-6 transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menú</h2>
          <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-lg font-semibold">
          <a href="#top" onClick={handleScrollLink("")}>Inicio</a>
          <a href="#services" onClick={handleScrollLink("services")}>Servicios</a>
          <a href="#contact" onClick={handleScrollLink("contact")}>Contáctanos</a>
          <a href="#about" onClick={handleScrollLink("about")}>Sobre nosotros</a>
        </nav>
      </div>
    </>
  );
}
