import React from 'react';
import './ServicesSection.css';

const services = [
  { title: 'Web Design', icon: '/icons/web-design.png' },
  { title: 'Photoshop', icon: '/icons/photoshop.png' },
  { title: 'Marketing', icon: '/icons/marketing.png' },
  { title: 'Illustrator', icon: '/icons/illustrator.png' },
  { title: 'Social Media', icon: '/icons/social-media.png' },
  { title: 'Graphics', icon: '/icons/graphics.png' },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="sub-title">Take A Look</p>
        <h2 className="main-title">My Services</h2>
      </div>

      <div className="services-grid row container">
        {services.map((service, index) => (
          <div key={index} className="service-card col-3">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">
              Vestibulum condimentum vehicula massa, ac convallis nullarell.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
