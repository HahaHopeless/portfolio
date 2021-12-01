import "./styles.css";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "react-lottie";
import { Timeline } from "gsap/gsap-core";

const Intro3 = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var myTechStack = new Timeline();

    myTechStack.fromTo(
      ".myTechStack",
      { scaleY: 0, rotateZ: -90 },
      {
        scaleY: 1,
        rotateZ: -90,
        scrollTrigger: {
          trigger: ".myTechStack",
          toggleActions: "play none none reverse",
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          ease: "elastic",
        },
      }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero3",
        pin: ".hero3",
        start: "center center",
        end: "+=2000",
        // scrub: 1,
        // markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      gsap.killTweensOf(window);
    };
  }, []);

  return (
    <section
      style={{ height: "100vh" }}
      className='hero3 vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden container-fluid '
    >
      <h1
        className='myTechStack'
        style={{
          fontWeight: "800",
          fontSize: "90px",
          textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
          userSelect: "none",
          textOverflow: "clip",
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginLeft: "-102vw",
          marginBottom: "-30vh",
          transformOrigin: "top",
        }}
      >
        <FormattedMessage id='TECH STACK' />
      </h1>
    </section>
  );
};

export default Intro3;
