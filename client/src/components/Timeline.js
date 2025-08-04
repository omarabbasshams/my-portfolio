import React from 'react';
import './Timeline.css';

const timelineItems = [
  {
    year: '2022',
    number: '1',
    title: 'Diploma In UI/UX Design',
    location: 'United States',
    color: '#f84871',
    description: 'Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium, totam rem aperiam.',
  },
  {
    year: '2022',
    number: '2',
    title: 'Diploma In Web Design',
    location: 'New York',
    color: '#fbb03b',
    description: 'Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium, totam rem aperiam.',
  },
  {
    year: '2017',
    number: '3',
    title: 'Diploma In UI/UX Design',
    location: 'United States',
    color: '#00c9d0',
    description: 'Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium, totam rem aperiam.',
  },
  {
    year: '2016',
    number: '5',
    title: 'Diploma In Angular',
    location: 'Canada',
    color: '#ff7f50',
    description: 'Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium, totam rem aperiam.',
  },
];

export default function Timeline() {
  return (
    <div className="container timeline-wrapper">
      {timelineItems.map((item, idx) => (
        <div className="row mb-5 align-items-center" key={idx}>
          <div className={`col-lg-6 col-md-4 ${idx % 2 !== 0 ? 'order-md-2 align-right' : 'align-left'}`}>
            <div style={{"--circle-color" : item.color}}  className={`timeline-year-circle ${idx % 2 !== 0 ? 'align-left' : 'align-right'}`}>
              <h2>{item.year}</h2>
            </div>
          </div>
          <div className={`col-lg-6 col-md-8 ${idx % 2 !== 0 ? 'order-md-1' : ''}`}>
            <div className="timeline-card shadow p-4">
              <div className={`d-flex ${idx % 2 == 0 ? 'justify-content-end':''} align-items-center mb-2`}>
                <h5  style={{"--circle-color" : item.color , }} className="timeline-number">{item.number}</h5>
              </div>
              <h4 className="mb-2">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
