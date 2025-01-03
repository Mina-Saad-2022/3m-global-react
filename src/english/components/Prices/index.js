import React from 'react';

const PricingItem = ({ title, features, price, image, isFeatured }) => {
  return (
    <div className={`col-xl-4 col-lg-6 ${isFeatured ? 'featured' : ''}`} data-aos="fade-up">
      <div className="pricing-item">
        {isFeatured && <span className="advanced">Advanced</span>}
        <img className="w-25 rounded" src={image} alt={title} />
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={feature === 'Long-term soil solutions' ? 'na' : ''}>
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
      title: 'Option One',
      features: [
        'Soil rich in essential minerals',
        'Helps improve crop growth',
        'Innovative and effective solutions',
        'Special care for the soil',
        'Improves the quality of agricultural land',
      ],
      price: '0',
      image: 'https://www2.0zz0.com/2024/12/17/13/104934265.jpeg',
    },
    {
      title: 'Option Two',
      features: [
        'Improves land production capacity',
        'Environmentally friendly enriched products',
        'Helps in the development of the agricultural sector',
        'Enhances soil efficiency in arid lands',
        'Long-term soil solutions',
      ],
      price: '50',
      image: 'https://www2.0zz0.com/2024/12/17/13/104934265.jpeg',
      isFeatured: true,
    },
    {
      title: 'Option Three',
      features: [
        'Fertilizers providing essential nutrients',
        'Innovative products to improve crop yield',
        'Customized services to meet each farm’s needs',
        'Specialized model to increase agricultural returns',
        'Permanent improvement of soil fertility',
      ],
      price: '50',
      image: 'https://www2.0zz0.com/2024/12/17/13/104934265.jpeg',
    },
  ];

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Prices</h2>
        <h1 className="title_arabic text-center p-2">
          Check<span className="green"> our prices </span>
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
