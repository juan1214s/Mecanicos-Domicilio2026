import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ClockIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [showInfo, setShowInfo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowInfo(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ⭐ INFO BAR — visible solo en desktop */}
      <div
        className={`text-white hidden md:block fixed top-0 left-0 w-full bg-black z-50 text-sm transition-all duration-300 
        ${
          showInfo ? "opacity-100 h-auto py-1" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 px-4">
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5" />
            <p className="mx-2">Lun - Vie: 05:00 AM – 06:00 PM</p>
            <p>Sáb - Dom: 06:00 AM – 12:00 PM</p>
          </div>

          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <p>+57 310 545 8117</p>
          </div>

          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            <p>Cl. 41 #42-07, La Candelaria, Medellín</p>
          </div>

          <div>
            <button className="font-bold py-2 px-4 rounded bg-[#F5C32E] hover:bg-yellow-400 text-black transition">
              Solicitar mecanico
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ NAVBAR */}
      <header
        className={`fixed left-0 w-full bg-white shadow-md z-40 transition-all duration-300 
        ${showInfo ? "top-0 md:top-10" : "top-0"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/">
            <img src="/img/logo2.png" className="h-12 w-auto" alt="Logo" />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex gap-8 text-black font-medium">
            <Link to="/" className="hover:text-yellow-500">
              Inicio
            </Link>
            <Link to="/about" className="hover:text-yellow-500">
              Servicios
            </Link>
            <Link to="/services" className="hover:text-yellow-500">
              Contáctanos
            </Link>
            <Link to="/pricing" className="hover:text-yellow-500">
              Sobre nosotros
            </Link>
          </nav>

          {/* Botón MOBILE */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ⭐ OVERLAY fondo oscuro */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 md:hidden
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ⭐ BOTTOM SHEET — MENÚ MÓVIL */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-xl z-50 p-6 
        transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menú</h2>
          <button onClick={() => setMenuOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-5 text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-yellow-500"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-500"
            onClick={() => setMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-500"
            onClick={() => setMenuOpen(false)}
          >
            Contáctanos
          </Link>
          <Link
            to="/pricing"
            className="hover:text-yellow-500"
            onClick={() => setMenuOpen(false)}
          >
            Sobre nosotros
          </Link>
        </nav>
      </div>
    </>
  );
}
