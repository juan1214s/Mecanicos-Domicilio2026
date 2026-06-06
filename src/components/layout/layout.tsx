import { Outlet } from "react-router-dom";
import Header from "../layout/header/header";
import { FooterComponent } from "./footer";
import WhatsappFixedIcon from "../Ui/whatsapp";
import "../../App.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
      <FooterComponent />
      <WhatsappFixedIcon />
    </>
  );
}
