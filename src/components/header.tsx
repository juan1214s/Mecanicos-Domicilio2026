import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { ClockIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowInfo(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ⭐ INFO BAR — FULL WIDTH */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 info-custom text-sm transition-all duration-300 
        ${
          showInfo ? "opacity-100 h-auto py-1" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 px-4">
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5" />
            <p>Sábado a domingo 06:00 AM - 06:00 PM</p>
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
            <button
              className="font-bold py-2 px-4 rounded 
              bg-[#F5C32E] hover:bg-yellow-400 text-black transition"
            >
              Reservar cita
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ NAVBAR — SE BAJA 40px PARA QUE NO SE ENCIME */}
      <Navbar
        className={`fixed left-0 w-full z-40 shadow-md navbar-custom transition-all duration-300
  ${showInfo ? "top-10" : "top-0"}`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 ">
          <NavbarBrand as={Link} href="/">
            <img src="/img/logo2.png" className="h-14 w-auto sm:h-16" alt="Logo" />
          </NavbarBrand>

          <NavbarToggle />

          <NavbarCollapse className="justify-end">
            <NavbarLink
              as={Link}
              href="/"
              className="text-black hover:text-yellow-500"
            >
              Inicio
            </NavbarLink>
            <NavbarLink
              as={Link}
              href="/about"
              className="text-black hover:text-yellow-500"
            >
              Servicios
            </NavbarLink>
            <NavbarLink
              as={Link}
              href="/services"
              className="text-black hover:text-yellow-500"
            >
              Contáctanos
            </NavbarLink>
            <NavbarLink
              as={Link}
              href="/pricing"
              className="text-black hover:text-yellow-500"
            >
              Sobre nosotros
            </NavbarLink>
          </NavbarCollapse>
        </div>
      </Navbar>
    </>
  );
}
