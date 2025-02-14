import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container" style={carouselContainerStyle}>
      <Slider {...settings}>
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://www2.0zz0.com/2024/12/21/22/999248171.jpeg" alt="الشريحة الأولى" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://www2.0zz0.com/2024/12/21/22/529073265.jpg" alt="الشريحة الثانية" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://www2.0zz0.com/2025/01/03/17/909730796.jpg" alt="الشريحة الثالثة" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://www2.0zz0.com/2025/01/03/17/582133527.jpg" alt="الشريحة الرابعة" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://www2.0zz0.com/2025/01/03/17/735195301.jpg" alt="الشريحة الخامسة" />
        </div>
      </Slider>
      <div className="layout">
        <section id="hero" className="hero section light-background">
          <div className="container">
            <div className="row gy-12">
              <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
                <h1 className="title_arabic p-2 title_company">
                  <span className="bolder">3M-GLOBAL</span><br />
                </h1>
                <h3 className="title_arabic short_title">الخدمات الزراعية والبيئية</h3>
                <h3 className="arabic p-2 title_arabic short_title_arabic">
                  نهج الزراعة العضوية للحفاظ علي البيئة الزراعية المصرية
                </h3>
                <div className="d-flex">
                  <a href="https://www.youtube.com/watch?v=NMhXRfTmAX8" className="glightbox btn-watch-video d-flex align-items-center">
                    <span>مشاهدة الفيديو المقدمة</span>
                    <i className="bi bi-play-circle"></i>
                  </a>
                  <a href="#about" className="btn-get-started">البدء</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const carouselContainerStyle = {
  backgroundColor: '#f5f9ff',
  padding: '0',
  position: 'relative',
  overflow: 'hidden',
};

export default CarouselComponent;
