import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./splash.css";
import { gsap } from "gsap";

const SplashScreen = ({ handleClick }) => {
  const splashRef = useRef(null);
  // const animateBottom = () => {
  //   gsap.from(clickRef.current, {
  //     y: 100
  //   });
  //   gsap.to(clickRef.current, {
  //     y: 0,
  //     duration: .6,
  //   });
  // };
  // useEffect(() => {
  //   animateBottom();
  // }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".splash__screen-info",
        {
          y: 100,
          scale: 0.5,
        },
        {
          y: 0,
          scale: 1,
          delay: 3,
          duration: 0.5,
        }
      );
    }, splashRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="splash__screen" id="splash__screen" ref={splashRef}>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="circle"></div>
      <div className="splash__screen-content">
        <h1>Hey, I am Saksham Parag Agarwal</h1>
        <h3>I am an Experience Designer</h3>
      </div>

      <div className="splash__screen-info" onClick={handleClick}>
        click to enter
      </div>
    </div>
  );
};

export default SplashScreen;
