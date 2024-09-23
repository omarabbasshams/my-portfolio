import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h1>Contact Me</h1>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
