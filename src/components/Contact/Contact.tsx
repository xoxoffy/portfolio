import React from 'react';
import './Contact.css';
import ContactInfo from './../ContactInfo/ContactInfo';
import ContactForm from '../ContactForm/ContactForm';
import { useTranslation } from 'react-i18next';

const Contact: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-section">
      <div className="contact-title">
        <h1>{t('Contact Me')}</h1>
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
