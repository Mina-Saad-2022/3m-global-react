import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد CSS الخاص بـ Bootstrap
import 'aos/dist/aos.css'; // تأكد من استيراد مكتبة AOS إذا كنت تستخدمها للأنيميشن
import AOS from 'aos'; // استيراد AOS للأنيميشن

AOS.init();

const ServicesSection = () => {
  const services = [
    {
      title: 'سماد عضوي',
      description: 'سماد عضوي يساعد على تحسين خصوبة التربة وزيادة قدرتها على الاحتفاظ بالماء.',
      imgSrc: 'https://www2.0zz0.com/2024/12/17/13/316810297.jpeg',
      delay: 100,
    },
    {
      title: 'سماد كيماوي',
      description: 'يحتوي على مكونات مغذية تساهم في نمو النباتات وزيادة المحصول الزراعي بشكل سريع.',
      imgSrc: 'https://www2.0zz0.com/2024/12/17/13/540166339.jpeg',
      delay: 200,
    },
    {
      title: 'سماد نيتروجيني',
      description: 'سماد يحتوي على النيتروجين لتحفيز نمو الأوراق وزيادة الكثافة النباتية.',
      imgSrc: 'https://www2.0zz0.com/2024/12/17/13/772336177.jpeg',
      delay: 300,
    },
    {
      title: 'سماد فوسفاتي',
      description: 'يساعد في تحسين نمو الجذور وزيادة قدرة النباتات على امتصاص العناصر المغذية.',
      imgSrc: 'https://www2.0zz0.com/2024/12/17/13/580632772.jpeg',
      delay: 400,
    },
    {
      title: 'سماد بوتاسي',
      description: 'يعزز من نمو الأزهار والثمار ويزيد من مقاومة النباتات للأمراض.',
      imgSrc: 'https://www2.0zz0.com/2024/12/17/13/669226345.jpeg',
      delay: 500,
    },
    {
      title: 'سماد مركب',
      description: 'يحتوي على مزيج من العناصر الغذائية الأساسية لتلبية احتياجات النباتات المختلفة.',
      imgSrc: 'https://www2.0zz0.com/2024/12/17/13/104934265.jpeg',
      delay: 600,
    },
  ];

  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="larger">منتجاتنا</h2>
        <h1 className="title_arabic text-center">
          يمكنك رؤية <span className="green">منتجاتنا</span>
        </h1>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={service.delay} key={index}>
              <div className="service-item position-relative">
                <div className="image-container">
                  <img className="w-50 rounded" src={service.imgSrc} alt={service.title} />
                </div>
                <a href="#" className="stretched-link">
                  <h3 className="title_arabic">{service.title}</h3>
                </a>
                <p className="arabic">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
