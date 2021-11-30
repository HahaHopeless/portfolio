import "./styles.css";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='d-flex justify-content-center footer-container'>
      <h5>
        <FormattedMessage id='madeWith' />
      </h5>
    </footer>
  );
};

export default Footer;
