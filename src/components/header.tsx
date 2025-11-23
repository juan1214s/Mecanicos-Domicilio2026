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
import logo from "../../public/img/logo2.png";

export default function Header() {
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowInfo(false); // desaparece la info-bar al hacer scroll
      } else {
        setShowInfo(true); // vuelve a aparecer al top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar className="fixed top-0 left-0 w-full z-50 shadow-md navbar-custom" >
      {/* Barra de info */}
      <div
        className={`w-full info-custom text-sm py-1 transition-all duration-800 ${
          showInfo ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className=" flex flex-col md:flex-row justify-between items-center gap-3 px-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ClockIcon className="h-5 w-5" />
            <p>Sábado a domingo 06:00 AM - 06:00 PM</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <p>+57 310 545 8117</p>
          </div>
          <div className="flex items-center gap-2 text-center md:text-right">
            <MapPinIcon className="h-5 w-5" />
            <p>Cl. 41 #42-07, La Candelaria, Medellín</p>
          </div>
          <div>
            <button className="font-bold py-2 px-4 rounded btnreservcita-custom">
              Reservar cita
            </button>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 py-4">
        <NavbarBrand as={Link} href="/">
          <img src={logo} className="h-14 w-auto sm:h-16" alt="Logo" />
        </NavbarBrand>

        <NavbarToggle />

        <NavbarCollapse className="justify-end">
          <NavbarLink
            as={Link}
            href="/"
            active
            className="text-black hover:text-yellow-500"
          >
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/about" className="text-black hover:text-yellow-500">
            About
          </NavbarLink>
          <NavbarLink as={Link} href="/services" className="text-black hover:text-yellow-500">
            Services
          </NavbarLink>
          <NavbarLink as={Link} href="/pricing" className="text-black hover:text-yellow-500">
            Pricing
          </NavbarLink>
          <NavbarLink as={Link} href="/contact" className="text-black hover:text-yellow-500">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
