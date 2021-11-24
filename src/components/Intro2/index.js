import "./styles.css";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/services.json";
import { Timeline } from "gsap/gsap-core";

const Intro2 = (props) => {
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
    var t5 = new Timeline();

    t1.fromTo(
      ".iMake",
      {
        opacity: 0,
        translateX: "translate(80px, 75px) rotate(20deg) skew(20deg, 0deg)",
      },
      {
        opacity: 1,
        translateX: "translate(130px, 90px) rotate(20deg) skew(20deg, 0deg)",
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
      ".appsAnd",
      { width: 0 },
      {
        width: "100%",
        scrollTrigger: {
          trigger: ".appsAnd",
          toggleActions: "play none none none",
          start: "center center",
          end: "+=150%",
          scrub: 1,
        },
      }
    );
    t3.fromTo(
      ".websites",
      { rotationX: 90 },
      {
        rotationX: 0,
        scrollTrigger: {
          trigger: ".websites",
          toggleActions: "play none none none",
          start: "top -50%",
          end: "+=60%",
          scrub: 1,
        },
      }
    );
    t4.fromTo(
      ".apps",
      {
        backgroundColor: "rgb(47, 53, 66)",
        textShadow: "2px 4px 4px rgba(255, 255, 255, 0)",
      },
      {
        backgroundColor: "rgb(0, 104, 255)",
        textShadow:
          "2px 4px 4px rgba(255, 255, 255, 0.15), 0px 0px 5px rgba(0, 104, 254, 0.8)",
        scrollTrigger: {
          trigger: ".apps",
          toggleActions: "play none none none",
          start: "top -100%",
          end: "+=100%",
          scrub: 1,
        },
      }
    );
    t5.fromTo(
      ".websites",
      {
        backgroundColor: "rgb(47, 53, 66)",
        textShadow: "2px 4px 4px rgba(255, 255, 255, 0)",
      },
      {
        backgroundColor: "rgb(0, 104, 255)",
        textShadow:
          "2px 4px 4px rgba(255, 255, 255, 0.15), 0px 0px 5px rgba(0, 104, 254, 0.8)",
        scrollTrigger: {
          trigger: ".websites",
          toggleActions: "play none none none",
          start: "top -100%",
          end: "+=100%",
          scrub: 1,
        },
        markers: true,
      }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero2",
        pin: ".hero2",
        start: "center center",
        end: "+=1500",
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
      className='hero2 vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden'
    >
      <div className='container-fluid row '>
        <div className='col-md-4 d-flex align-items-start animation'>
          <Lottie
            options={defaultOptions}
            height={500}
            width={400}
            isStopped={false}
            style={{
              zIndex: 99,
              userSelect: "none",
              cursor: "default",
            }}
          />
        </div>
        <div
          className='col-md-7 d-flex justify-content-center  flex-column'
          style={{
            marginLeft: "5vw",
            display: "inline-block",
          }}
        >
          <h1
            className='iMake'
            style={{
              fontWeight: "800",
              fontSize: "4vw",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              userSelect: "none",
              // marginBottom: "-3vw",
            }}
          >
            <FormattedMessage id='iMake' />
          </h1>
          {/* <h1 style={{ marginBottom: "-4.5vw" }}> */}
          <span
            className='appsAnd'
            style={{
              fontWeight: "900",
              fontSize: "10.5vw",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              marginLeft: "-0.35vw",
              userSelect: "none",
              textOverflow: "clip",
              overflow: "hidden",
              marginBottom: "-5vw",
              whiteSpace: "nowrap",
              display: "inline-block",
              transform: "skew(-60deg,20deg) scaleY(0.6) translate(70px, 0px)",
            }}
          >
            <span className='apps'>APPS </span>

            <span
              className='and'
              style={{
                fontWeight: "400",
                fontSize: "8vw",
                textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
                marginLeft: "-0.35vw",
                userSelect: "none",
                display: "inline-block",
              }}
            >
              {`  &`}
            </span>
          </span>

          {/* </h1> */}
          <h1
            className='websites'
            style={{
              fontWeight: "900",
              fontSize: "10.5vw",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              userSelect: "none",
              transformOrigin: "top",
              transform: "skew(0deg, 21deg)",
            }}
          >
            WEBSITES
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro2;
