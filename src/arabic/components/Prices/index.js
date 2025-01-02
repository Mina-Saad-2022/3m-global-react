import React from 'react';

const PricingItem = ({ title, features, price, image, isFeatured }) => {
  return (
    <div className={`col-xl-4 col-lg-6 ${isFeatured ? 'featured' : ''}`} data-aos="fade-up">
      <div className="pricing-item">
        {isFeatured && <span className="advanced">متقدم</span>}
        <img className="w-25 rounded" src={image} alt={title} />
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={feature === 'حلول طويلة المدى للتربة' ? 'na' : ''}>
              {feature}
            </li>
          ))}
        </ul>
        <div className="btn-wrap">
          <a href="#" className="btn-buy P-5" style={{ pointerEvents: 'none', fontSize: '30px' }}>
            {price} L.E
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingData = [
    {
      title: 'الخيار الأول',
      features: [
        'تربة غنية بالمعادن الأساسية',
        'مساعدة في تحسين نمو المحاصيل',
        'حلول مبتكرة وفعّالة',
        'عناية خاصة بالتربة',
        'تحسين جودة الأرض الزراعية'
      ],
      price: '0',
      image: 'https://www2.0zz0.com/2024/12/17/13/104934265.jpeg',
    },
    {
      title: 'الخيار الثاني',
      features: [
        'تحسين قدرة الأرض على الإنتاج',
        'منتجات مخصبة تراعي البيئة',
        'مساعدة في تطوير القطاع الزراعي',
        'رفع كفاءة التربة في الأراضي الجافة',
        'حلول طويلة المدى للتربة'
      ],
      price: '50',
      image: 'https://www2.0zz0.com/2024/12/17/13/104934265.jpeg',
      isFeatured: true,
    },
    {
      title: 'الخيار الثالث',
      features: [
        'مخصبات توفر العناصر الغذائية الضرورية',
        'منتجات مبتكرة لتحسين إنتاج المحاصيل',
        'خدمات مخصصة لتلبية احتياجات كل مزرعة',
        'نموذج مخصص لزيادة العوائد الزراعية',
        'تحسين خصوبة التربة بشكل دائم'
      ],
      price: '50',
      image: 'https://www2.0zz0.com/2024/12/17/13/104934265.jpeg',
    },
    
  ];

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>اسعارنا</h2>
        <h1 className="title_arabic text-center p-2">
          التحقق من<span className="green"> اسعارنا </span>
        </h1>
      </div>

      <div className="container">
        <div className="row gy-3">
          {pricingData.map((item, index) => (
            <PricingItem
              key={index}
              title={item.title}
              features={item.features}
              price={item.price}
              image={item.image}
              isFeatured={item.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
