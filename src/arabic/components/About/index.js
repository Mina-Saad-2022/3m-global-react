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
        <h2 className="larger">رؤيتنا</h2>
        <h1 className="title_arabic text-center p-2">
          يمكنك معرفة<span className="green">المزيد عنا</span>
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
              <h3 className="title_arabic">نبذة عن شركة ثري ام جلوبال</h3>
              <p className="fst-italic arabic">
                تضمن منتجاتنا التحول الكامل لنهج الزراعة العضوية المستدامة بغرض الحفاظ علي البيئة الزراعية المصرية مع
                ضمان زيادة انتاجية المحاصيل والحصول علي منتج زراعي علي الجودة وامن علي صحة المستهلك
              </p>
              <ul>
                <li>
                  <div>
                    <h4 className="title_arabic">الجودة العالية</h4>
                    <p className="arabic">
                      نحرص على تقديم منتجات ذات جودة فائقة تلبيةً لاحتياجات المزارعين والمتخصصين في الزراعة.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="title_arabic">الابتكار المستمر</h4>
                    <p className="arabic">
                      نلتزم بالابتكار وتطوير حلول زراعية جديدة ومتقدمة تساهم في تحقيق أفضل النتائج.
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
