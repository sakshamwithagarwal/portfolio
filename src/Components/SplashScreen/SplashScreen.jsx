import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./splash.css";
import { gsap } from "gsap";

const SplashScreen = ({ handleClick }) => {
  const splashRef = useRef(null);
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       ".splash__screen-info",
  //       {
  //         y: 100,
  //         scale: 0.5,
  //       },
  //       {
  //         y: 0,
  //         scale: 1,
  //         delay: 1,
  //         duration: 0.5,
  //       }
  //     );
  //   }, splashRef);

  //   return () => ctx.revert();
  // }, []);

  const handleKeyPress = (e) => {
    console.log(e)
    if (e.keyCode === 32) alert('Enter is pressed')
  }

  return (
    <div
      className="splash__screen"
      id="splash__screen"
      ref={splashRef}
      onKeyDown={handleKeyPress}
    >
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="circle"></div>
      <div className="splash__screen-credits">
        PORTFOLIO <br /> <span>by</span> saksham.
      </div>
      <div className="splash__screen-content">
        <h1>Hey, I am Saksham Parag Agarwal</h1>
        <h3>I am an Experience Designer</h3>
      </div>
      <div className="splash__screen-info" onClick={handleClick}>
        click to enter{" "}
        <div className="arrow-circle">
        <svg
          width="31"
          height="8"
          viewBox="0 0 31 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM1 4.5H30V3.5H1V4.5Z"
            fill="#83878D"
          />
        </svg>
        </div>
      </div>

      <div className="splash__screen-links">
        <ul>
          <li>cookies</li>
          <li>legals</li>
        </ul>
      </div>
    </div>
  );
};

export default SplashScreen;
