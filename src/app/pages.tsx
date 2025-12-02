import Banner from "../components/banner";
import FAQ from "../components/faq/faq";
import Reviews from "../components/reviews/reviews";
import Services from "../components/services/services";
import GoogleMapComponent from "../components/GoogleMapComponent";
import CarInteractive from "../components/carInteractive";
import CTASection from "../components/ctaSection";
import TapComponent from "../components/tap";
import WhatsappFixedIcon from "../components/whatsapp";

export default function Pages(){
    return(
        <>
        <div className="bg-[#F6F6F6]">
            <Banner />
            <Services />
            <TapComponent />
            <CarInteractive />
            <Reviews />
            <CTASection />
            <GoogleMapComponent height="421px"/>
            <FAQ />
            <WhatsappFixedIcon />
        </div>
        </>
    )
}