import React from 'react';
import './ExperienceTimeline.css'; // Optional, or use inline styles

const experienceData = [
  {
    yearStart: '2018',
    yearEnd: '2019',
    duration: 'Feb to Dec',
    title: 'Senior UI/UX',
    keyword: 'Designer',
    company: 'Adobe',
    description: 'Sed ut unde omnis iste natus error sit totam rem aperiam are many variations of done.',
    link: '#',
    color: '#f84871',
  },
  {
    yearStart: '2016',
    yearEnd: '2017',
    duration: 'Feb to Dec',
    title: 'Senior UI/UX',
    keyword: 'Designer',
    company: 'Adobe',
    description: 'Sed ut unde omnis iste natus error sit totam rem aperiam are many variations of done.',
    link: '#',
    color: '#fbb03b',
  },
  {
    yearStart: '2014',
    yearEnd: '2015',
    duration: 'Mar to Apr',
    title: 'Senior PHP',
    keyword: 'Developer',
    company: 'Facebook',
    description: 'Sed ut unde omnis iste natus error sit totam rem aperiam are many variations of done.',
    link: '#',
    color: '#ff7f50',
  },
  {
    yearStart: '2012',
    yearEnd: '2013',
    duration: 'Mar to Apr',
    title: 'Senior PHP',
    keyword: 'Developer',
    company: 'Facebook',
    description: 'Sed ut unde omnis iste natus error sit totam rem aperiam are many variations of done.',
    link: '#',
    color: '#00c9d0',
  },
  {
    yearStart: '2010',
    yearEnd: '2011',
    duration: 'Feb to Dec',
    title: 'Senior UI/UX',
    keyword: 'Designer',
    company: 'Adobe',
    description: 'Sed ut unde omnis iste natus error sit totam rem aperiam are many variations of done.',
    link: '#',
    color: '#fbb03b',
  },
  {
    yearStart: '2008',
    yearEnd: '2009',
    duration: 'Feb to Dec',
    title: 'Senior UI/UX',
    keyword: 'Designer',
    company: 'Adobe',
    description: 'Sed ut unde omnis iste natus error sit totam rem aperiam are many variations of done.',
    link: '#',
    color: '#f84871',
  }
];

const ExperienceTimeline = () => {
    return (
      <div className="experience-container container">
        <h2 className="experience-heading">
          <span className="experience-subtitle">Involvement</span>
          <br />
          <span className="experience-title">My Experience</span>
        </h2>
  
        <div className="experience-grid row">
          {experienceData.map((item, index) => {
            const blockIndex = Math.floor(index / 2)
         return (
            <div key={index} className={`experience-item ${blockIndex % 2 === 0 ? 'left' : 'right'} col-6 row`}>
              <div className="experience-box col-4 " style={{ backgroundColor: item.color }}>
                <div>{item.yearStart}</div>
                <div className="experience-duration">{item.duration}</div>
                <div>{item.yearEnd}</div>
                <div
                  className={`experience-arrow ${blockIndex % 2 === 0 ? 'arrow-left' : 'arrow-right'}`}
                  style={{
                    borderLeft: blockIndex % 2 === 0 ? `10px solid ${item.color}` : 'none',
                    borderRight: blockIndex % 2 !== 0 ? `10px solid ${item.color}` : 'none'
                  }}
                ></div>
              </div>
  
              <div className="experience-details col-7" style={{
                marginLeft: index % 2 === 0 ? '20px' : '0',
                marginRight: index % 2 !== 0 ? '20px' : '0'
              }}>
                <h3 className="experience-role">
                  {item.title} <span style={{ color: item.color }}>{item.keyword}</span>
                </h3>
                <p className="experience-company" style={{ color: item.color }}>{item.company}</p>
                <p className="experience-description">{item.description}</p>
             
              </div>
            </div>
          )}
        )}
        </div>
      </div>
    );
  };
  

export default ExperienceTimeline;
