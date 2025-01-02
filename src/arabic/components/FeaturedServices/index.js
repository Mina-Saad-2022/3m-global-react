import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد CSS الخاص بـ Bootstrap
import 'aos/dist/aos.css'; // تأكد من استيراد مكتبة AOS للأنيميشن
import AOS from 'aos'; // استيراد AOS للأنيميشن

const FeaturedServicesSection = () => {
  // تفعيل AOS عند تحميل المكون
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      title: 'التفاني في الخدمة',
      description: 'نحن نلتزم بتقديم أفضل الخدمات بأعلى معايير الجودة والدقة، لنكون دائمًا عند حسن ظن عملائنا.',
      iconClass: 'bi bi-activity',
      delay: 100,
    },
    {
      title: 'الابتكار والتطوير',
      description: 'نسعى دائمًا لتقديم حلول مبتكرة ومواكبة أحدث التقنيات لضمان تحقيق نتائج استثنائية.',
      iconClass: 'bi bi-bounding-box-circles',
      delay: 200,
    },
    {
      title: 'الأمانة والمصداقية',
      description: 'نحن نؤمن بأن الأمانة والمصداقية هما أساس بناء علاقة طويلة الأمد مع عملائنا وشركائنا.',
      iconClass: 'bi bi-calendar4-week',
      delay: 300,
    },
    {
      title: 'منتجات عالية الجودة',
      description: 'نحرص على توفير منتجات ذات جودة عالية تلبيةً لاحتياجات عملائنا المتنوعة والمتغيرة.',
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
                  <a href="" className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p className="arabic">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
