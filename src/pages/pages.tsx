import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhatsappFixedIcon from "../components/Ui/whatsapp";

const Banner = lazy(() => import("../components/Ui/banner"));
const Services = lazy(() => import("../components/services/services"));
const ServicesHome = lazy(() => import("../components/servicesHome/servicesHome"));
const TapComponent = lazy(() => import("../components/Ui/tap"));
const CTASection = lazy(() => import("../components/Ui/ctaSection"));

const Reviews = lazy(() => import("../components/reviews/reviews"));
const FAQ = lazy(() => import("../components/faq/faq"));
const GoogleMapComponent = lazy(() => import("../components/Ui/GoogleMapComponent"));
const CarInteractive = lazy(() => import("../components/Ui/carInteractive"));

export default function Pages() {
  const [showMap, setShowMap] = useState(false);
  const [showHeavy, setShowHeavy] = useState(false);

  // CONTROL DE CARGA POR SCROLL
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 800) setShowHeavy(true);
      if (window.scrollY > 1500) setShowMap(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#F6F6F6]">

      {/* HERO */}
      <Suspense fallback={<div style={{ height: 500 }} />}>
        <Banner />
      </Suspense>

      {/* CONTENIDO INICIAL */}
      <Suspense fallback={<div style={{ height: 200 }} />}>
        <ServicesHome initialVisible={4} allowExpand={false} sectionId="services-home-preview" />
      </Suspense>

      <div className="px-4 pb-10 -mt-2">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            to="/servicios"
            className="px-6 py-2 bg-[#FFCC33] text-black rounded-lg font-semibold shadow hover:bg-yellow-400 transition"
          >
            Ver mas servicios
          </Link>
        </div>
      </div>

      <Suspense fallback={null}>
        <TapComponent />
      </Suspense>

      <Suspense fallback={<div style={{ height: 300 }} />}>
        <Services initialVisible={4} allowExpand={false} sectionId="services-taller-preview" />
      </Suspense>

      <div className="px-4 pb-10 -mt-2">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            to="/servicios"
            className="px-6 py-2 bg-[#FFCC33] text-black rounded-lg font-semibold shadow hover:bg-yellow-400 transition"
          >
            Ver mas servicios
          </Link>
        </div>
      </div>

      {/* COMPONENTES PESADOS */}
      {showHeavy && (
        <>
          <Suspense fallback={<div style={{ height: 300 }} />}>
            <CarInteractive />
          </Suspense>

          <Suspense fallback={<div style={{ height: 200 }} />}>
            <Reviews />
          </Suspense>
        </>
      )}

      <Suspense fallback={null}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<div style={{ height: 200 }} />}>
        <FAQ />
      </Suspense>

      {/* MAPA (solo cuando baja bastante) */}
      {showMap && (
        <Suspense fallback={<div style={{ height: 400 }} />}>
          <GoogleMapComponent height="421px" />
        </Suspense>
      )}

      <WhatsappFixedIcon />
    </div>
  );
}