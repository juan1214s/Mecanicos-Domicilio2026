import { Outlet } from "react-router-dom";
import Header from "./header/header";
import { FooterComponent } from "./footer";
import "../App.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
}
