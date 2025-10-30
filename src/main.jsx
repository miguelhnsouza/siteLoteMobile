import React from "react";
import ReactDOM from "react-dom/client";
import useIsDesktop from "./hooks/useIsDesktop";
import "../style.css";

// Desktop pages
import Navbar from "./pages/Desktop/NavBar/Navbar";
import Banner from "./pages/Desktop/Hero/Hero";
import Videos from "./pages/Desktop/Videos/Videos";
import Section4 from "./pages/Desktop/Section4/Section4";
import Integrations from "./pages/Desktop/Integrations/Integrations";
import Aws from "./pages/Desktop/Aws/Aws";
import Questions from "./pages/Desktop/Questions/Questions";
import Banner3 from "./pages/Desktop/Banner3/Banner3";
import Form from "./pages/Desktop/Form/Form";
import Comments from "./pages/Desktop/Comments/Comments";
import Contact from "./pages/Desktop/Contact/Contact";
import Footer from "./pages/Desktop/Footer/Footer";

// Mobile pages
// import NavbarMob from "./pages/Mobile/NavBar/NavbarMob";
import HeroMobile from "./pages/Mobile/HeroMobile/HeroMobile";
import VideosMobile from "./pages/Mobile/VideosMobile/VideosMobile";
import CrmMobile from "./pages/Mobile/CrmMobile/CrmMobile";
import IntegrationsMobile from "./pages/Mobile/IntegrationsMobile/IntegrationsMobile";
import AwsMobile from "./pages/Mobile/AwsMobile/AwsMobile";
import QuestionsMobile from "./pages/Mobile/QuestionsMobile/QuestionsMobile";
import Banner3Mobile from "./pages/Mobile/Banner3Mobile/Banner3Mobile";
import FormMobile from "./pages/Mobile/FormMobile/FormMobile";
import CommentsMobile from "./pages/Mobile/CommentsMobile/CommentsMobile";
import ContactMobile from "./pages/Mobile/ContactMobile/ContactMobile";
import FooterMobile from "./pages/Mobile/FooterMobile/FooterMobile";
import NavbarMobile from "./pages/Mobile/NavBarMobile/NavbarMobile";


function App() {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? (
        // --- 💻 Versão Desktop ---
        <>
          <Navbar />
          <Banner />
          <Videos />
          <Section4 />
          <Integrations />
          <Aws />
          <Questions />
          <Banner3 />
          <Form />
          <Comments />
          <Contact />
          <Footer />
        </>
      ) : (
        // --- 📱 Versão Mobile ---
        <>
          <NavbarMobile />
          <HeroMobile />
          <VideosMobile />
          <CrmMobile />
          <IntegrationsMobile />
          <AwsMobile />
          <QuestionsMobile />
          <Banner3Mobile />
          <FormMobile />
          <CommentsMobile />
          <ContactMobile />
          <FooterMobile />
        </>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
