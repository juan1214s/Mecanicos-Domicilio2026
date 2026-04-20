import { lazy, Suspense, useEffect, useState } from "react";
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

  // PAGE VIEW
  useEffect(() => {
    window.dataLayer?.push({
      event: "page_view",
      page_path: window.location.pathname,
      page_title: document.title
    });
  }, []);

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
        <ServicesHome />
      </Suspense>

      <Suspense fallback={null}>
        <TapComponent />
      </Suspense>

      <Suspense fallback={<div style={{ height: 300 }} />}>
        <Services />
      </Suspense>

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

      {/* MAPA (solo cuando baja bastante) */}
      {showMap && (
        <Suspense fallback={<div style={{ height: 400 }} />}>
          <GoogleMapComponent height="421px" />
        </Suspense>
      )}

      <Suspense fallback={<div style={{ height: 200 }} />}>
        <FAQ />
      </Suspense>

      <WhatsappFixedIcon />
    </div>
  );
}