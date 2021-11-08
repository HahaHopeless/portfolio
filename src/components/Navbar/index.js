import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { setGlobalLanguage } from "../../store/actionTypes";
import { useLocation } from "react-router-dom";
import ReactAnime from "react-animejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const { Anime, stagger } = ReactAnime;

  const setLang = (e) => {
    props.setGlobalLanguage(e);
  };

  var location = useLocation();

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      console.log("DOM fully loaded");
    },
    false
  );

  return (
    <nav className='app-navbar ml-auto mr-auto'>
      <ul className='d-flex justify-content-around align-items-center pt-2'>
        <li>
          <Link
            to='/'
            className={
              location.pathname === "/" ? "app-link active" : "app-link"
            }
          >
            {/* <FontAwesomeIcon icon={faHome} /> */}
            <FormattedMessage id='home' />
          </Link>
        </li>
        <li>
          <Link
            to='/projects'
            className={
              location.pathname === "/projects" ? "app-link active" : "app-link"
            }
          >
            <FormattedMessage id='projects' />{" "}
            <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className={
              location.pathname === "/contact" ? "app-link active" : "app-link"
            }
          >
            {/* <FontAwesomeIcon icon={faEnvelope} />{" "} */}
            <FormattedMessage id='contact' />
          </Link>
        </li>
        <li>
          <div class='btn-group'>
            <button
              type='button'
              class='btn btn-secondary btn-sm dropdown-toggle'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <img
                src={require("../../assets/icons/lang.svg")}
                className='lang-icon mr-2'
              />
              <span>{props.lang.toUpperCase()}</span>
            </button>
            <div class='dropdown-menu'>
              <a
                class='dropdown-item'
                onClick={() => {
                  setLang("en");
                }}
              >
                <img
                  src={require("../../assets/icons/en.svg")}
                  className='lang-icon'
                />
                <span>EN</span>
              </a>
              <a
                class='dropdown-item'
                onClick={() => {
                  setLang("de");
                }}
              >
                <img
                  src={require("../../assets/icons/de.svg")}
                  className='lang-icon'
                />
                <span>DE</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.languageReducer.lang,
  };
};

export default connect(mapStateToProps, { setGlobalLanguage })(Navbar);
