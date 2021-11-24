import "./styles.css";
import React, { useEffect, useLayoutEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
// import Lottie from "react-lottie";
import Lottie from "lottie-react";
import { useLottie, useLottieInteractivity } from "lottie-react";
// import animationData from "../../assets/animations/dev2.json";
import animationData from "../../assets/animations/developer.json";
import { Timeline } from "gsap/gsap-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";

const Intro1 = (props) => {
  const handleDownload = () => {
    //Use the commented part only when you get the CONTENT of the file instead of the whole file...
    // let blob = new Blob([require("../../assets/documents/CV.docx")], {
    //   type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document'",
    // });
    saveAs(
      require("../../assets/documents/resume.pdf"),
      "CV - Mohsin Kamal Akbar.pdf"
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var t1 = new Timeline();
    var t2 = new Timeline();
    var t3 = new Timeline();
    var t4 = new Timeline();
    var t5 = new Timeline();

    t1.fromTo(
      ".hiIm",
      { opacity: 0, translateX: -30 },
      {
        opacity: 1,
        translateX: 10,
        scrollTrigger: {
          trigger: ".hiIm",
          toggleActions: "play none none none",
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      }
    );
    t2.fromTo(
      ".mohsin",
      { scale: 2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".mohsin",
          toggleActions: "play none none none",
          start: "center center",
          end: "bottom top",
          scrub: 1,
          onLeave: () => {},
          onEnterBack: () => {},
        },
      }
    );
    t3.fromTo(
      ".kamalakbar",
      { translateY: 500, opacity: 0 },
      {
        translateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".kamalakbar",
          toggleActions: "play none none none",
          start: "top -5%",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
    t4.fromTo(
      ".btn-hover",
      { width: 0 },
      {
        width: 150,
        scrollTrigger: {
          trigger: ".btn-hover",
          toggleActions: "play none none none",
          start: "top -80%",
          end: "bottom center",
          scrub: 0.2,
          ease: "bounce",
        },
      }
    );

    t5.to(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        pin: ".hero",
        start: "center center",
        end: "+=1500",
        ease: "ease-in",
        // scrub: true,
        // markers: true,
      },
    });

    //ScrollTrigger broke react-router. Below is a fix for it.
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      gsap.killTweensOf(window);
    };
  }, []);

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [10],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [10, 22],
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [22, 110],
      },
    ],
  };

  const style = {
    height: 500,
    width: 400,
    marginTop: "-10vh",
    zIndex: 99,
    userSelect: "none",
    cursor: "default",
    pointerEvents: "none",
  };

  return (
    <div
      style={{ height: "100vh" }}
      className='hero vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden'
    >
      <div className='container-fluid row '>
        <div className='col-md-7'>
          <div style={{ textJustify: "inter-word", textAlign: "left" }}>
            <h1
              className='hiIm'
              style={{
                fontWeight: "800",
                fontSize: "4vw",
                textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                userSelect: "none",
              }}
            >
              <FormattedMessage id='helloIm' />
            </h1>
            <h1 className='mohsin gradientText blue'>Mohsin</h1>
            <h1
              className='kamalakbar gradientText black'
              style={{
                fontSize: "8vw",
                marginLeft: "0.08vw",
              }}
            >
              Kamal Akbar
            </h1>
            <br></br>
            <div
              className='btn-hover color-9 d-flex justify-content-center align-items-center'
              onClick={handleDownload}
            >
              <div style={{ minWidth: "150px" }}>
                <FontAwesomeIcon
                  icon={faFileDownload}
                  className='downloadIcon'
                  opacity={0.4}
                />
                <span style={{ userSelect: "none", color: "white" }}>
                  <FormattedMessage id='downloadCV' />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-5 d-flex align-items-start animation'>
          <Lottie
            animationData={animationData}
            interactivity={interactivity}
            style={style}
            isStopped={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro1;
