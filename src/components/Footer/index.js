import "./styles.css";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='d-flex justify-content-center footer-container'>
      <p>
        <FormattedMessage id='builtBy' />
      </p>
    </footer>
  );
};

export default Footer;
