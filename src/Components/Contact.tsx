import React from 'react';
import '../css/contact.css';

const Contact: React.FC = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to connect, please reach out!</p>
      <div className="contact-info">  
        <button className="email-button">
          <a href="mailto:alton26@usf.edu">
            Send an Email
          </a>
        </button>
        <button className="linkedin-button">
          <a href="https://www.linkedin.com/in/alton-simpson-b07278238/" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
