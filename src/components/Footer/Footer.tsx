import React from 'react';
import './Footer.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <h4>Dominik Woźniewicz - 2023©</h4>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/xoxoffy" target="_blank" rel="noreferrer">
          <AiFillGithub size={'2em'} />
        </a>
        <a
          href="https://www.linkedin.com/in/dominik-woźniewicz-7b8777260/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={'2em'} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
