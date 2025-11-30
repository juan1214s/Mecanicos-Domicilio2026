import AboutUs from "../components/aboutUs";
import Banner from "../components/banner";
import FAQ from "../components/faq";
import Reviews from "../components/reviews";
import Services from "../components/services/services";
import GoogleMapComponent from "../components/GoogleMapComponent";
import CTASection from "../components/ctaSection.tsx";
import CarInteractive from "../components/carInteractive";



export default function Pages(){
    return(
        <>
        <div className="bg-[#F6F6F6]">
            <Banner />
            <Services />
            <AboutUs />
            <CarInteractive />
            <Reviews />
            <CTASection />
            <GoogleMapComponent height="421px"/>
            <FAQ />
        </div>
        </>
    )
}