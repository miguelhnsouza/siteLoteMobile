/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import useIsDesktop from "./hooks/useIsDesktop";
import { usePerformance } from "./hooks/useSEO";
import "../style.css";
import { setMetaCredentials, trackPageView, track30SecondsOnPage, track50PercentScroll, track90PercentScroll, captureUTMParameters } from "./services/meta/metaConversion";

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
import BlackFridayModal from "./pages/BlackFriday/BlackFridayModal";



function App() {
  const isDesktop = useIsDesktop();
  const hasTrackedPageView = React.useRef(false);
  const hasTracked30Seconds = React.useRef(false);
  const hasTracked50PercentScroll = React.useRef(false);
  const hasTracked90PercentScroll = React.useRef(false);

  usePerformance();

  React.useEffect(() => {
    if (!hasTrackedPageView.current) {
      captureUTMParameters();
      
      setMetaCredentials('EAALsQWbZCId0BPZC9qfDNtfZBomAZBIZBeZCj98xrrWCWVjOog8fZCqWe5Cnosa3Jq46KR32IwwZAPu3DlGjSN7voAxT6HNqd0a2Jj6vJfCCUnDOJYjO8JKVEayZAuYh8QlrWG9HcLVDziAF4ffjeEVCSS0mQ7ZAhfCV03Q0sw6usHl5talZBQkFwanFOze2Gug08e2aAZDZD', '2703375596599994');
      
      trackPageView();
      hasTrackedPageView.current = true;
    }

    const timer30s = setTimeout(() => {
      if (!hasTracked30Seconds.current) {
        track30SecondsOnPage();
        hasTracked30Seconds.current = true;
      }
    }, 30000);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollTop + windowHeight) / documentHeight * 100;

      if (scrollPercent >= 50 && !hasTracked50PercentScroll.current) {
        track50PercentScroll();
        hasTracked50PercentScroll.current = true;
      }

      if (scrollPercent >= 90 && !hasTracked90PercentScroll.current) {
        track90PercentScroll();
        hasTracked90PercentScroll.current = true;
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer30s);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <>
          <Navbar />
          <BlackFridayModal />
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
        <>
          <NavbarMobile />
          <BlackFridayModal />
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
