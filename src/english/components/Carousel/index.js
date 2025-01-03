import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container" style={carouselContainerStyle}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://www2.0zz0.com/2024/12/21/22/999248171.jpeg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www2.0zz0.com/2024/12/21/22/529073265.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www2.0zz0.com/2025/01/03/17/909730796.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www2.0zz0.com/2025/01/03/17/582133527.jpg" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www2.0zz0.com/2025/01/03/17/735195301.jpg" alt="Fifth slide" />
          </div>
        </div>
        {/* إضافة الأسهم */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="layout">
        <section id="hero" className="hero section light-background">
          <div className="container">
            <div className="row gy-12">
              <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
                <h1 className="title p-2 title_company">
                  <span className="bolder">3M-GLOBAL</span><br />
                </h1>
                <h4 className="short_title">Agricultural & Environmental Services</h4>
                <h3 className="p-2 short_title">
                  The approach to organic farming to preserve the Egyptian agricultural environment
                </h3>
                <div className="d-flex">
                  <a href="https://www.youtube.com/watch?v=NMhXRfTmAX8" className="glightbox btn-watch-video d-flex align-items-center">
                    <span>Watch intro video</span>
                    <i className="bi bi-play-circle"></i>
                  </a>
                  <a href="#about" className="btn-get-started">Get started</a>
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