import "./styles.css";
import React from "react";
import ScrollUp from "../../components/ScrollUp";
import Intro1 from "../../components/Intro1/index123";
import Intro2 from "../../components/Intro2";

const Landing = () => {
  const fadeInOut = () => {
    setTimeout(() => {
      return "fade-out";
    }, 200);
  };

  return (
    <>
      <ScrollUp
        className={`fade-in ${fadeInOut}`}
        animeClass={`fade-in ${fadeInOut}`}
      />
      <Intro1 />
      {/* <div style={{ height: "220vh" }}></div> */}
      <Intro2 />
      <div style={{ height: "220vh" }}></div>
    </>
  );
};

export default Landing;
