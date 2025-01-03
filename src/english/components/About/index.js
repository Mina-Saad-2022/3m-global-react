import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="about section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="larger">Our Vision</h2>
        <h1 className="title_arabic text-center p-2">
          You can learn <span className="green">more about us</span>
        </h1>
      </div>

      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img
              src="https://www2.0zz0.com/2024/12/17/14/271977914.png"
              alt="About Image"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content ps-0 ps-lg-3">
              <h3 className="title_arabic">About 3M Global</h3>
              <p className="fst-italic arabic">
                Our products ensure the complete transformation to a sustainable organic farming approach in order to
                preserve the Egyptian agricultural environment while ensuring increased crop productivity and achieving
                a high-quality agricultural product that is safe for consumer health.
              </p>
              <ul>
                <li>
                  <div>
                    <h4 className="title_arabic">High Quality</h4>
                    <p className="arabic">
                      We are committed to providing products of superior quality to meet the needs of farmers and
                      agricultural specialists.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="title_arabic">Continuous Innovation</h4>
                    <p className="arabic">
                      We are dedicated to innovation and developing new and advanced agricultural solutions that
                      contribute to achieving the best results.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
