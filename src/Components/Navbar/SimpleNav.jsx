import React, { useState } from "react";
import "./nav.css";
import "./custom-ham.css";

const SimpleNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="simplified__nav">
      <nav>
        <div className="logo">
          <a href="/">
            <img src="/assets/outlined_logo.svg" alt="LOGO" />
          </a>
        </div>

        <div className="nav__list"></div>

        <div className="nav__toggle">
          ham
        </div>
      </nav>
    </div>
  );
};

export default SimpleNav;
