import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function NotFound() {
  return (
    <div className='container-fluid h-100 min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1>
        <FormattedMessage id='pageNotFound' />
      </h1>
      <p>
        <FormattedMessage id='resourceMoved' />
      </p>
      <Link to='/'>
        <FormattedMessage id='gotoStart' />
      </Link>
    </div>
  );
}

export default NotFound;
