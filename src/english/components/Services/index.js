import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const ServicesSection = () => {
  const services = [
    {
      title: "Organic Fertilizer",
      description:
        "An organic fertilizer that helps improve soil fertility and increase its water retention capacity.",
      imgSrc: "https://www2.0zz0.com/2024/12/17/13/316810297.jpeg",
      delay: 100,
    },
    {
      title: "Chemical Fertilizer",
      description:
        "Contains nutrients that contribute to plant growth and increase agricultural yield rapidly.",
      imgSrc: "https://www2.0zz0.com/2024/12/17/13/540166339.jpeg",
      delay: 200,
    },
    {
      title: "Nitrogen Fertilizer",
      description:
        "A fertilizer that contains nitrogen to stimulate leaf growth and increase plant density.",
      imgSrc: "https://www2.0zz0.com/2024/12/17/13/772336177.jpeg",
      delay: 300,
    },
    {
      title: "Phosphate Fertilizer",
      description:
        "Helps improve root growth and increases the ability of plants to absorb nutrients.",
      imgSrc: "https://www2.0zz0.com/2024/12/17/13/580632772.jpeg",
      delay: 400,
    },
    {
      title: "Potash Fertilizer",
      description:
        "Enhances the growth of flowers and fruits and increases plant resistance to diseases.",
      imgSrc: "https://www2.0zz0.com/2024/12/17/13/669226345.jpeg",
      delay: 500,
    },
    {
      title: "Compound Fertilizer",
      description:
        "Contains a mix of essential nutrients to meet the needs of various plants.",
      imgSrc: "https://www2.0zz0.com/2024/12/17/13/104934265.jpeg",
      delay: 600,
    },
  ];

  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="larger">Our Products</h2>
        <h1 className="title_arabic text-center">
          You can see <span className="green">Our Products</span>
        </h1>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              key={index}
            >
              <div className="service-item position-relative">
                <div className="image-container">
                  <img
                    className="w-50 rounded"
                    src={service.imgSrc}
                    alt={service.title}
                  />
                </div>
                <h3 className="title_arabic">{service.title}</h3>
                <p className="arabic">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
