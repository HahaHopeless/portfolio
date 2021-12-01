import "./styles.css";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollUp from "../../components/ScrollUp";
import Intro1 from "../../components/Intro1";
import Intro2 from "../../components/Intro2";
import Intro3 from "../../components/Intro3";

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
      <Intro2 />
      <Intro3 />
    </>
  );
};

export default Landing;
