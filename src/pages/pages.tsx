import Banner from "../components/Ui/banner";
import FAQ from "../components/faq/faq";
import Reviews from "../components/reviews/reviews";
import Services from "../components/services/services";
import GoogleMapComponent from "../components/Ui/GoogleMapComponent";
import CarInteractive from "../components/Ui/carInteractive";
import CTASection from "../components/Ui/ctaSection";
import TapComponent from "../components/Ui/tap";
import WhatsappFixedIcon from "../components/Ui/whatsapp";
import ServicesHome from "../components/servicesHome/servicesHome";
import { useEffect } from "react";

export default function Pages() {
    useEffect(() => {
        window.dataLayer?.push({
            event: "page_view",
            page_path: window.location.pathname,
            page_title: document.title
        });
    }, []);
    return (
        <>
            <div className="bg-[#F6F6F6]">
                <Banner />
                <ServicesHome />
                <TapComponent />
                <Services />
                <CarInteractive />
                <Reviews />
                <CTASection />
                <GoogleMapComponent height="421px" />
                <FAQ />
                <WhatsappFixedIcon />
            </div>
        </>
    )
}