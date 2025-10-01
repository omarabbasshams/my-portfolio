import React from 'react';
import './RecentNews.css';
import img1 from './../image1.png';
import img2 from './../image1.png';
import img3 from './../image1.png';

const RecentNews = () => {
  return (
    <div className="recent-news-container">
      <h2 className="section-title">
        <span>My Blog</span><br />
        Recent News
      </h2>

      <div className="news-grid">

        {/* Card 1 - Vertical */}
        <div className="news-card vertical">
          <img src={img1} alt="News 1" className="news-image" />
          <div className="news-content">
            <p className="news-date">January 28, 2021</p>
            <h3 className="news-title">We Are Provide Unique Ideas We Help Clients.</h3>
            <div className="news-meta">
              <span>👤 <span className="author">Admin</span></span>
              <span>💬 50</span>
            </div>
            <p className="news-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of years old.
            </p>
            <a href="#" className="read-more">Read More ➞</a>
          </div>
        </div>

        {/* Card 2 - Horizontal */}
        <div className="news-card horizontal">
          <img src={img2} alt="News 2" className="news-image" />
          <div className="news-content">
            <p className="news-date">January 28, 2021</p>
            <h3 className="news-title">See Our Most Successful Compliited Project.</h3>
            <div className="news-meta">
              <span>👤 <span className="author">Admin</span></span>
              <span>💬 50</span>
            </div>
            <p className="news-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text classical.
            </p>
            <a href="#" className="read-more">Read More ➞</a>
          </div>
        </div>

        {/* Card 3 - Vertical */}
        <div className="news-card vertical">
          <img src={img3} alt="News 3" className="news-image" />
          <div className="news-content">
            <p className="news-date">January 28, 2021</p>
            <h3 className="news-title">Unique Ideas Products Are Compliited Project.</h3>
            <div className="news-meta">
              <span>👤 <span className="author">Admin</span></span>
              <span>💬 50</span>
            </div>
            <p className="news-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text of classical.
            </p>
            <a href="#" className="read-more">Read More ➞</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecentNews;
