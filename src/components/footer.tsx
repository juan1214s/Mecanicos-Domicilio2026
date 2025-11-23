import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import "../App.css";

export function FooteComponent() {
  return (
    <Footer container className="footer-custom page-container">
      <FooterCopyright href="#" by="Mecanicos a Domicilio™" year={2026} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
