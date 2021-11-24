import "./styles.css";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/services.json";
import { Timeline } from "gsap/gsap-core";

const Intro3 = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var t1 = new Timeline();
    var t2 = new Timeline();
    var t3 = new Timeline();
    var t4 = new Timeline();

    // gsap.to(".iMake", {
    //   scrollTrigger: {
    //     trigger: ".hero2",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: 1,
    //     markers: "true",
    //   },
    //   color: "#0068fa",
    // });

    // gsap.to(".iMake", {
    //   scrollTrigger: {
    //     trigger: ".hero2",
    //     end: "top center",
    //     start: "bottom center",
    //     scrub: 1,
    //     markers: "true",
    //   },
    //   color: "#2f3542",
    //   immediateRender: false,
    // });

    t1.fromTo(
      ".iMake",
      { opacity: 0, translateX: -30 },
      {
        opacity: 1,
        translateX: 10,
        scrollTrigger: {
          trigger: ".iMake",
          toggleActions: "play none none reverse",
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
      ".download",
      { rotationX: -90 },
      {
        rotationX: 0,
        scrollTrigger: {
          trigger: ".download",
          toggleActions: "play none none none",
          start: "top -80%",
          end: "bottom center",
          scrub: 0.2,
          ease: "ease-in",
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

    //ScrollTrigger broke react-router. Below is a fix for it.
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
      className='hero3 vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden'
    >
      <div className='container-fluid row '>
        <div
          className='col-md-7 d-flex  flex-column'
          style={{ marginLeft: "5vw" }}
        >
          <h1
            className=''
            style={{
              fontWeight: "800",
              fontSize: "4vw",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              userSelect: "none",
            }}
          >
            <FormattedMessage id='MY TECK STACK' />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro3;
