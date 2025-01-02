import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title_arabic text-center">
              أهم شركائنا في <span className="green">النجاح</span>
            </h1>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <img
              src="https://i0.wp.com/miegos.com/wp-content/uploads/2020/06/cropped-new-logo-copy.png?fit=512%2C512&ssl=1"
              className="img-fluid w-50"
              alt="Partner 1"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPebtHap5cPn8EhMJbQwqP_ae1UhBNNCZ5-VGu2EZQP287Tr6NWfJ27CImQ0qSUlyhl0Y&usqp=CAU"
              className="img-fluid w-50"
              alt="Partner 2"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgg7CwKvgMSsf5ut8JrP327z2ePs1YbBopQ&s"
              className="img-fluid w-50"
              alt="Partner 3"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ7a4swQrO2rzfcONOqqw5aX65kxVMbopZQ&s"
              className="img-fluid w-50"
              alt="Partner 4"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW26co96XksjTWl1vT7wp0kWRVwPspV1hzrSNilLI6qlRCvUy6zZfjhxCk8tjic2Xh6OE&usqp=CAU"
              className="img-fluid w-50"
              alt="Partner 5"
            />
          </div>
          <div>
            <img
              src="https://www.arabfertilizer.org/thumb/phpThumb.php?src=../new_uploads/companies_logos/Elnasr.jpg&w=400&aoe=1&zc=1"
              className="img-fluid w-50"
              alt="Partner 6"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXk7gsctxv5lZ9I97ok_EzLsOGfGWYNXUwpw&s"
              className="img-fluid w-50"
              alt="Partner 8"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ClientsSection;
