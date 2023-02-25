import React from 'react';
import './Contact.css';
import ContactInfo from './../ContactInfo/ContactInfo';
import ContactForm from '../ContactForm/ContactForm';

const Contact: React.FunctionComponent = () => {
  return (
    <div className="contact-section">
      <div className="contact-title">
        <h1>Skontaktujmy się!</h1>
      </div>
      <div className="contact-info">
        <div className="contact-left">
          <ContactInfo />
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
