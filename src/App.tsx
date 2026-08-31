import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import ScrollToTop from "./components/Ui/ScrollToTop";

const Pages = lazy(() => import("./pages/pages"));
const Contact = lazy(() => import("./pages/contact/contact"));
const AboutSection = lazy(() => import("./pages/aboutUs.tsx/aboutUs"));
const ServicesPage = lazy(() => import("./pages/services/services"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Pages />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutUs" element={<AboutSection />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
