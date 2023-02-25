import React, { Fragment } from 'react';
import './ContactInfo.css';
import ContactItem from '../ContactItem/ContactItem';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';
import { GiModernCity } from 'react-icons/gi';

const ContactInfo: React.FunctionComponent = () => {
  return (
    <Fragment>
      <ContactItem
        contactText="+48 796 000 956"
        contactIcon={<BsFillTelephoneFill />}
      />
      <ContactItem
        contactText="dominik.wozniewicz@gmail.com"
        contactIcon={<SiMinutemailer />}
      />
      <ContactItem
        contactText="Szczecin, Polska"
        contactIcon={<GiModernCity />}
      />
    </Fragment>
  );
};

export default ContactInfo;
