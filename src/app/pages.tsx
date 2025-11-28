import AboutUs from "../components/aboutUs";
import Banner from "../components/banner";
import CTASection from "../components/CTASection";
import FAQ from "../components/faq";
import Reviews from "../components/reviews";
import CarInteractive from "../components/CarInteractive";
import Services from "../components/services/services";


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
            <FAQ />
        </div>
        </>
    )
}