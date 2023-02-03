import React from "react";
import "./main.css";

const Main = ({compRef}) => {
  const handleClickToScroll = () => {
    compRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <h1 className="heading_main">
        <div className="animated_heading_wrapper">
          <span>Visual</span>
          <span>Industrial</span>
          <span>Interaction</span>
          <span>Visual</span>
        </div>

        <span>Designer</span>
      </h1>
      <div className="hero__content">
        <p>
          I am an Industrial and Interaction Designer who creates designs that
          are both sustainable and universal. I try to draw inspiration from
          music and comics in order to create designs that provide a harmonious
          and consistent user experience for others.
        </p>
        <div className="hero__scroll_arrow" onClick={handleClickToScroll}>
          <svg
            width="93"
            height="74"
            viewBox="0 0 93 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <circle cx={0} cy={0} r={100} stroke="white" strokeWidth={1} /> */}
            <path
              d="M46.0053 0.683594V73.3168M92.2717 26.4772L46.1196 73.3167L1.23145 26.0555"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Main;