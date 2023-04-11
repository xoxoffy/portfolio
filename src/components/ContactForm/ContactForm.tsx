import React from 'react';
import './ContactForm.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FunctionComponent = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const [isErrorValidation, setIsErrorValidation] = useState<boolean>(false);
  const [isErrorAPI, setIsErrorAPI] = useState<boolean>(false);
  const [isSentSuccessful, setIsSentSuccessful] = useState<boolean>(false);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!toSend.from_name || !toSend.reply_to || !toSend.message) {
      setIsErrorValidation(true);
      setIsSentSuccessful(false);
      return;
    }
    send(SERVICE_ID, TEMPLATE_ID, toSend, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSentSuccessful(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsErrorAPI(true);
      });

    setToSend({
      from_name: '',
      message: '',
      reply_to: '',
    });
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIsErrorValidation(false);
    setIsErrorAPI(false);
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  const { t } = useTranslation();

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>{t('Your name')}</label>
      <input
        type="text"
        name="from_name"
        value={toSend.from_name}
        onChange={handleChange}
        className="basic-field"
      />
      <label>{t('Your email')}</label>
      <input
        type="text"
        name="reply_to"
        value={toSend.reply_to}
        onChange={handleChange}
        className="basic-field"
      />
      <label>{t('Your message')}</label>
      <textarea
        name="message"
        value={toSend.message}
        onChange={handleChange}
        className="message-field"
      />
      <button type="submit">{t('Send')}</button>
      {isErrorValidation ? <h3>{t('Enter all fields')}</h3> : null}
      {isErrorAPI ? <h3>{t('Something went wrong')}</h3> : null}
      {isSentSuccessful ? <h4>{t('Message sent succesful')}</h4> : null}
    </form>
  );
};

export default ContactForm;
