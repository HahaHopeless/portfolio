import "./styles.css";
import React, { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Engine } from "matter-js";
import { Timeline } from "gsap/gsap-core";
import StackCard from "./StackCard";

const Intro3 = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var myTechStack = new Timeline();

    // myTechStack.fromTo(
    //   ".myTechStack",
    //   { scaleY: 0 },
    //   {
    //     scaleY: 1,
    //     scrollTrigger: {
    //       trigger: ".myTechStack",
    //       toggleActions: "play none none reverse",
    //       start: "top center",
    //       end: "top bottom",
    //       scrub: 1.5,
    //       ease: "elastic",
    //     },
    //   }
    // );

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

  const scene = useRef();
  const engine = useRef(Engine.create());

  return (
    <section
      style={{ height: "100vh" }}
      className='hero3 vw-100 d-flex flex-column align-items-center justify-content-center overflow-hidden container-fluid'
    >
      <div className='row d-flex align-items-center justify-content-center '>
        <div className='col-md-4 align-self-center text-center d-flex flex-column justify-content-center align-items-center'>
          <StackCard className='hmtl' title='HMTL' icon='html5' />
          <StackCard className='css' title='CSS' icon='css3' />
          <StackCard className='node' title='Node JS' icon='nodejs' />
        </div>
        <div className='col-md-4 align-self-center text-center d-flex flex-column justify-content-center align-items-center'>
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
              transformOrigin: "center",
              marginLeft: "-90vw",
              marginTop: "10vh",
              rotateZ: -90,
            }}
          >
            <FormattedMessage id='TECH STACK' />
          </h1>
        </div>
        <div className='col-md-4 align-self-center text-center d-flex flex-column justify-content-center align-items-center'>
          <StackCard className='hmtl' title='HMTL' icon='js' />
          <StackCard className='css' title='CSS' icon='react' />
          <StackCard className='node' title='Node JS' icon='redux' />
        </div>
      </div>
    </section>
  );
};

export default Intro3;
