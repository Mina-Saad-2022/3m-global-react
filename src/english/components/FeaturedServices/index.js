import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'aos/dist/aos.css'; // Ensure importing AOS library for animations
import AOS from 'aos'; // Import AOS library

const FeaturedServicesSection = () => {
  // Initialize AOS when the component loads
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      title: 'Dedication to Service',
      description: 'We are committed to providing the best services with the highest standards of quality and accuracy, always meeting our clients’ expectations.',
      iconClass: 'bi bi-activity',
      delay: 100,
    },
    {
      title: 'Innovation and Development',
      description: 'We strive to offer innovative solutions and keep up with the latest technologies to ensure exceptional results.',
      iconClass: 'bi bi-bounding-box-circles',
      delay: 200,
    },
    {
      title: 'Integrity and Credibility',
      description: 'We believe that integrity and credibility are the foundation for building long-lasting relationships with our clients and partners.',
      iconClass: 'bi bi-calendar4-week',
      delay: 300,
    },
    {
      title: 'High-Quality Products',
      description: 'We ensure to provide high-quality products that meet the diverse and changing needs of our clients.',
      iconClass: 'bi bi-broadcast',
      delay: 400,
    },
  ];

  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              className="col-xl-3 col-md-6 col-12 d-flex"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              key={index}
            >
              <div className="service-item position-relative w-100">
                <div className="icon">
                  <i className={`${service.iconClass} icon`} />
                </div>
                <h4>
                {service.title}
                </h4>
                <p className="arabic">{service.title} <br /> {service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
