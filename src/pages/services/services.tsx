import ServicesHome from "../../components/servicesHome/servicesHome";
import Services from "../../components/services/services";

export default function ServicesPage() {
  return (
    <div className="bg-[#F6F6F6] mt-5">
      <ServicesHome sectionId="services-home" />
      <Services sectionId="services-taller" />
    </div>
  );
}
