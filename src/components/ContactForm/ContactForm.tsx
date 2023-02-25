import React from 'react';
import './ContactForm.css';
import { useState } from 'react';
import { send } from 'emailjs-com';

const ContactForm: React.FunctionComponent = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const [isErrorValidation, setIsErrorValidation] = useState(false);
  const [isErrorAPI, setIsErrorAPI] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!toSend.from_name || !toSend.reply_to || !toSend.message) {
      setIsErrorValidation(true);
    }

    send(SERVICE_ID, TEMPLATE_ID, toSend, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsErrorAPI(true);
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

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>Twoje imie*</label>
      <input
        type="text"
        name="from_name"
        value={toSend.from_name}
        onChange={handleChange}
        className="basic-field"
      />
      <label>Twój E-Mail*</label>
      <input
        type="text"
        name="reply_to"
        value={toSend.reply_to}
        onChange={handleChange}
        className="basic-field"
      />
      <label>Twoja wiadomość*</label>
      <textarea
        name="message"
        value={toSend.message}
        onChange={handleChange}
        className="message-field"
      />
      <button type="submit">Wyślij</button>
      {isErrorValidation ? <h3>Prosze wypełnić wszystkie pola.</h3> : null}
      {isErrorAPI ? <h3>Ups! Coś poszło nie tak.</h3> : null}
    </form>
  );
};

export default ContactForm;
