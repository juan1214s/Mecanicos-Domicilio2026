import { useEffect, useState } from "react";
import InfoBar from "./infoBar";
import Navbar from "./navBar";

export default function Header() {
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowInfo(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Por si el id no existe: subir al top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <InfoBar showInfo={showInfo} />
      <Navbar showInfo={showInfo} scrollToSection={scrollToSection} />
    </>
  );
}
