import React from 'react';

const ContactInfoItem = ({ icon, title, content, socialLinks }) => {
  return (
    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
      <i className={`bi ${icon} flex-shrink-0`}></i>
      <div>
        <h3>{title}</h3>
        {socialLinks ? (
          <div className="social-links d-flex">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className={`social-icon ${link.platform}`}>
                <i className={`bi bi-${link.platform}`}></i>
              </a>
            ))}
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Address',
      content: '1 Al-Mithaq St., Zahraa Nasr City, Cairo',
    },
    {
      icon: 'bi-telephone',
      title: 'Call Us',
      content: '+20 0106740400',
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      content: 'info@el-warsha.com',
    },
    {
      icon: 'bi-telephone',
      title: 'Follow Us',
      socialLinks: [
        { platform: 'twitter', url: '#' },
        { platform: 'facebook', url: '#' },
        { platform: 'instagram', url: '#' },
        { platform: 'linkedin', url: '#' },
      ],
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>
          <span>You can reach us</span>{' '}
          <span className="description-title">24/7</span>
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-wrap">
              {contactInfo.map((info, index) => (
                <ContactInfoItem
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  content={info.content}
                  socialLinks={info.socialLinks}
                />
              ))}
            </div>
          </div>

          <div className="col-lg-8">
            <iframe
              src="https://maps.google.com/maps?q=30.0509828,31.3965854&z=15&hl=en&output=embed"
              frameBorder="0"
              style={{ border: 0, width: '100%', height: '420px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
