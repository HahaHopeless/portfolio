import "./styles.css";
import React, { useRef, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/services.json";
import { Timeline } from "gsap/gsap-core";
import { create } from "@lottiefiles/lottie-interactivity";
import { Player } from "@lottiefiles/react-lottie-player";

const Intro2 = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  let myRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var t1 = new Timeline();
    var t2 = new Timeline();
    var t3 = new Timeline();
    var t4 = new Timeline();

    t1.fromTo(
      ".iMake",
      { opacity: 0, translateX: -30 },
      {
        opacity: 1,
        translateX: 10,
        scrollTrigger: {
          trigger: ".iMake",
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
        trigger: ".hero2",
        pin: ".hero2",
        start: "center center",
        end: "+=1500",
        // scrub: 1,
        // markers: true,
      },
    });

    // myRef.current.addEventListener("ready", function (e) {
    //   create({
    //     mode: "scroll",
    //     player: "#devices",
    //     actions: [
    //       {
    //         visibility: [0, 1],
    //         type: "seek",
    //         frames: [0, 100],
    //       },
    //     ],
    //   });
    // });

    console.log("________________REF_____________: ", myRef);
  }, []);

  return (
    <section
      style={{ height: "100vh" }}
      className='hero2 vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden'
    >
      <div className='container-fluid row '>
        <div className='col-md-4 d-flex align-items-start animation'>
          <Player
            ref={myRef}
            id='devices'
            autoplay
            loop
            // options={defaultOptions}
            src={require("../../assets/animations/services.json")}
            height={700}
            width={350}
            isStopped={false}
            style={{
              zIndex: 99,
              userSelect: "none",
              cursor: "default",
            }}
          ></Player>
        </div>
        <div className='col-md-7 ml-5 d-flex justify-content-center  flex-column'>
          <h1
            className='iMake'
            style={{
              fontWeight: "800",
              fontSize: "4vw",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              userSelect: "none",
            }}
          >
            <FormattedMessage id='I Make' />
          </h1>
          <h1
            className=''
            style={{
              fontWeight: "800",
              fontSize: "4vw",
              // marginBottom: "-5vw",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              marginLeft: "-0.35vw",
              userSelect: "none",
            }}
          >
            {"WEBSITES"}
          </h1>
          <h1
            className=''
            style={{
              fontWeight: "800",
              fontSize: "8vw",
              // marginBottom: "-5vw",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              marginLeft: "-0.35vw",
              userSelect: "none",
            }}
          >
            {"&"}
          </h1>
          <h1
            className=''
            style={{
              fontWeight: "800",
              width: "100%",
              fontSize: "8vw",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
              userSelect: "none",
            }}
          >
            MOBILE APPS
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro2;
