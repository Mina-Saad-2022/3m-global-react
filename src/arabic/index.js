import React from "react";
import ArabicHeader from "./components/header/index";
import CarouselComponent from "./components/Carousel/index";
import ServicesSection from "./components/Services/index";
import FeaturedServicesSection from "./components/FeaturedServices/index";
import AboutSection from "./components/About/index";
import ClientsSection from "./components/Partners/index";
import Testimonials from "./components/Opinions/index";
import Pricing from "./components/Prices/index";
import Contact from "./components/Connect/index";
import Footer from "./components/Footer/index";
import ScrollToTopButton from "./components/Scroll";

const ArabicIndex = () => {
  return (
    <div>
      <ArabicHeader />
      <main className="main">
        <CarouselComponent />
        <FeaturedServicesSection />
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        <Testimonials />
        <Pricing />
        <Contact />
        </main>
      <ScrollToTopButton />
      <Footer />
    </div>    
  );
};

export default ArabicIndex;
