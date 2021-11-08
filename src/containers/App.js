import "./App.css";
import React from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ReactAnime from "react-animejs";
import Navbar from "../components/Navbar";
import Routes from "../Routes";
import BackToTop from "../components/BackToTop";

const App = (props) => {
  // const renderCircles = (x, y) => {
  //   return <p style={{ position: "fixed", top: y, left: x }}>CLICKKKK</p>;
  // };
  // window.addEventListener("click", (e) => {
  //   var cursorX = e.pageX;
  //   var cursorY = e.pageY;
  //   renderCircles(cursorX, cursorY);
  // });

  return (
    <IntlProvider messages={require(`../translations/${props.lang}.json`)}>
      <Router>
        <Navbar />
        {/* <BackToTop /> */}
        <Routes />
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.languageReducer.lang,
  };
};

export default connect(mapStateToProps, null)(App);
