import React, { useRef, useState } from "react";
// Import Swiper React components
import { SwiperSlide } from "swiper/react/swiper-slide";
import { Swiper } from "swiper/react/swiper";
import { EffectCards } from "swiper";

import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/modules/effect-cards/effect-cards.min.css";
import "./styles.css";

export default function Intro3() {
  // var swiper = new Swiper(".swiper-container", {
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

  return (
    <div style={{ display: "flex", padding: "30px" }}>
      <h1 style={{ fontSize: "150px", fontWeight: "900", lineHeight: "115px" }}>
        MY <br />
        TECH
        <br /> STACK
      </h1>
      <div style={{ flex: 1, textAlign: "center" }}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'
          spaceBetween={35}
        >
          <SwiperSlide>
            <img
              src={require("../../assets/icons/html5.svg")}
              style={{ width: "290px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/css3.svg")}
              style={{ width: "290px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/js.svg")}
              style={{ width: "400px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/react.svg")}
              style={{ width: "250px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/icons/nodejs.svg")}
              style={{ width: "250px", height: "320px", objectFit: "contain" }}
            />
          </SwiperSlide>
          {/* <SwiperSlide>Mongo DB</SwiperSlide>
        <SwiperSlide>MySQL</SwiperSlide> */}
        </Swiper>
        <h3 style={{ alignSelf: "flex-end" }}>{"< Swipe >"}</h3>
      </div>
    </div>
  );
}
