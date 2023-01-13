import React, { useState } from "react";
import "./nav.css";
import "./custom-ham.css";

const SimpleNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    // this.classList.toggle("opened");
    // this.setAttribute("aria-expanded", this.classList.contains("opened"));
    setIsOpen(!isOpen);
  };
  return (
    <div className="simplified__nav" data-scroll>
      <nav>
        <div className="logo">
          <a href="/">
            <img src="/assets/outlined_logo.svg" alt="LOGO" />
          </a>
        </div>

        <div className="nav__list"></div>

        <div className="nav__toggle">
          <button className={isOpen ? "menu opened" : "menu"} onClick={handleClick} aria-label="Main Menu">
            {/* <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" stroke-linecap="round"
              />
              <path className="line line2" d="M 20,50 H 80" stroke-linecap="round"/>
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" stroke-linecap="round"
              />
            </svg> */}
            <svg width="auto" height="40" viewBox="0 0 72 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.06006" y="0.5" width="50" height="8" rx="5.5" className="line line1"/>
              <rect x="1.06006" y="15.5" width="50" height="8" rx="5" className="line line2"/>
              <rect x="1.06006" y="30.5" width="50" height="8" rx="5.5" className="line line3"/>
            </svg>

          </button>
        </div>
      </nav>
    </div>
  );
};

export default SimpleNav;
