import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="Opinions" className="testimonials section dark-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Slider {...settings}>
          <div>
            <div className="testimonial-item">
              <h3 className="title_arabic">محمد علي</h3>
              <p className="arabic">
                <i className="bi bi-quote quote-icon-left"></i>
                <span>
                  لقد كانت تجربتي مع هذه الشركة والمنتج رائعة! الخدمة كانت
                  متميزة، والفريق محترف للغاية. ساعدوني على تحسين أعمالي بشكل
                  ملحوظ وأنا ممتن لكل الدعم الذي تلقيته.
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
          <div>
            <div className="testimonial-item">
              <h3 className="title_arabic">محمد علي</h3>
              <p className="arabic">
                <i className="bi bi-quote quote-icon-left"></i>
                <span>
                  لقد كانت تجربتي مع هذه الشركة والمنتج رائعة! الخدمة كانت
                  متميزة، والفريق محترف للغاية. ساعدوني على تحسين أعمالي بشكل
                  ملحوظ وأنا ممتن لكل الدعم الذي تلقيته.
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>{" "}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
