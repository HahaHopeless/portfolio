import "./styles.css";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import VanillaTilt from "vanilla-tilt";
import Card from "../../components/Card";

const Projects = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
      max: 15,
      reverse: true,
      speed: 500,
      gyroscope: false,
    });
  }, []);
  return (
    <section
      className='d-flex flex-column justify-content-center align-items-center min-vh-100'
      style={{ marginTop: "15vh" }}
    >
      <Card
        title='Breaking Bingo'
        goToUrl='https://breakingbingo.netlify.app'
        bgImage={require("../../assets/images/breakingBingo.png")}
      />
      <Card
        title='Tr@$h T@lk'
        extras='18+'
        bgImage={require("../../assets/images/trashTalk.webp")}
      />
    </section>
  );
};

export default Projects;
