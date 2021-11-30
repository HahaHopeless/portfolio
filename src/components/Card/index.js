import "./styles.css";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ReactAnime from "react-animejs";

const Card = (props) => {
  const { anime, stagger } = ReactAnime;

  return (
    <div
      className='card container js-tilt'
      style={{
        backgroundImage: `url(${props.bgImage})`,
      }}
    >
      <h1 className='cardTitle card-header card-text'>{props.title}</h1>
      <div class='card-body'></div>
      <div
        className='card-footer'
        onClick={() => window.open(`${props.goToUrl}`, "_blank")}
      >
        <h3 className='card-footer-text card-text'>
          <FormattedMessage id='visitWebsite' />
        </h3>
      </div>
    </div>
  );
};

export default Card;
