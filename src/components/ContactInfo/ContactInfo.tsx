import React, { Fragment } from 'react';
import './ContactInfo.css';
import ContactItem from '../ContactItem/ContactItem';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';
import { GiModernCity } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const ContactInfo: React.FunctionComponent = () => {
  const { t } = useTranslation();
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
      <ContactItem contactText={t('Location')} contactIcon={<GiModernCity />} />
    </Fragment>
  );
};

export default ContactInfo;
