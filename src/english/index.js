import React from "react";
import EnglishHeader from "./components/header/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import CarouselComponent from "./components/Carousel/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import ServicesSection from "./components/Services/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import FeaturedServicesSection from "./components/FeaturedServices/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import AboutSection from "./components/About/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import ClientsSection from "./components/Partners/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import Testimonials from "./components/Opinions/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import Pricing from "./components/Prices/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import Contact from "./components/Connect/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك
import Footer from "./components/Footer/index"; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك

const EnglishIndex = () => {
  return (
    <div>
      <EnglishHeader />
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
      <Footer />
    </div>
  );
};

export default EnglishIndex;
