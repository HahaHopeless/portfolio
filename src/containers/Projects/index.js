import "./styles.css";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import VanillaTilt from "vanilla-tilt";
import { usePalette } from "react-palette";
import Card from "../../components/Card";
import imgPath from "../../assets/images/breakingBingo.png";

const Projects = () => {
  const { data, loading, error } = usePalette(imgPath);
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
        bgColor={data.vibrant}
        bgImage={require("../../assets/images/breakingBingo.png")}
        goToUrl='https://breakingbingo.netlify.app'
      />
      <Card title='Impressentation' />
      <Card title='Der Markt' />
    </section>
  );
};

export default Projects;
