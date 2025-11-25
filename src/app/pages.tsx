import AboutUs from "../components/aboutUs";
import Banner from "../components/banner";
import Services from "../components/services/services";


export default function Pages(){
    return(
        <>
        <div className="">
            <Banner />
            <Services />
            <AboutUs />
        </div>
        </>
    )
}