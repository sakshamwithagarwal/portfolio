import React, { useRef, useEffect, useContext } from "react";
import "./main.css";
import { gsap } from "gsap";

const Main = ({ compRef }) => {
  const arrowRef = useRef(null);
  const arrowSVGRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { width: 0, height: 0 },
      { width: "200px", height: "200px", duration: 1, delay: 1.4 }
    );
    gsap.fromTo(
      arrowSVGRef.current,
      { scale: 0 },
      { scale: 1, delay: 1.6, ease: "ease.in", duration: 1 }
    );
    let mm = gsap.matchMedia();
    mm.add("(max-width: 576px", () => {
      gsap.fromTo(
        arrowRef.current,
        { width: 0, height: 0 },
        { width: "100px", height: "100px", duration: 1, delay: 1.4 }
      );
    });
  }, []);

  const handleArrowMouseEnter = () => {
    gsap.to(arrowRef.current, {
      scale: 1.1,
      duration: 0.3,
    });
  };

  const handleArrowMouseLeave = () => {
    gsap.to(arrowRef.current, {
      scale: 1,
      duration: 0.3,
    });
  };

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
        <div className="hero__heading-mobile">
          <div className="hero__heading_row-1">
            <span>Visual</span>
            <span>Indust</span>
            <span>Interac</span>
            <span>Visual</span>
          </div>
          <div className="hero__heading_row-2">
            <div className="hero__heading_col-1"></div>
            <div className="hero__heading_col-2">
            <span>O.O</span>
            <span>rial</span>
            <span>tion</span>
            <span>O.O</span>
            </div>
          </div>
        </div>

        <span className="hero__subheading">Designer</span>
        <span className="hero__subheading-mobile">Design <br/> er</span>
      </h1>
      <div className="hero__content">
        <p>
          I am an Industrial and Interaction Designer who creates designs that
          are both sustainable and universal. I try to draw inspiration from
          music and comics in order to create designs that provide a harmonious
          and consistent user experience for others.
        </p>
        <div className="hero__scroll_arrow" onClick={handleClickToScroll}>
          <div
            className="hero__scroll-arrow-circle"
            ref={arrowRef}
            onMouseEnter={handleArrowMouseEnter}
            onMouseLeave={handleArrowMouseLeave}
            onTouchStart={handleArrowMouseEnter}
            onTouchEnd={handleArrowMouseLeave}
          ></div>
          <svg
            width="93"
            height="74"
            viewBox="0 0 93 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={arrowSVGRef}
            className="link"
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
