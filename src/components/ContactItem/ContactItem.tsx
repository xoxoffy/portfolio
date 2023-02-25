import React, { ReactNode } from 'react';
import './ContactItem.css';

interface Props {
  contactText: string;
  contactIcon: ReactNode;
}

const ContactItem: React.FunctionComponent<Props> = ({
  contactText = 'ContactText',
  contactIcon,
}) => {
  return (
    <div className="contact-item__left">
      <div className="contact-icon">{contactIcon}</div>
      <h1>{contactText}</h1>
    </div>
  );
};

export default ContactItem;
