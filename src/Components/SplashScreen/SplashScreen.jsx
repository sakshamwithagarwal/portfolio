import React, { useState } from "react";
import "./splash.css";

const SplashScreen = () => {
  return (
    <div className="splash__screen" id="splash__screen">
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="circle"></div>
      <div className="splash__screen-content">
        <h1>Hey, I am Saksham Parag Agarwal</h1>
        <h3>I am an Experience Designer</h3>
      </div>

      <div className="splash__screen-info">click to enter</div>
    </div>
  );
};

export default SplashScreen;
