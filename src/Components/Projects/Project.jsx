import React, { useState, useContext } from "react";
import { MouseContext } from "../../context/MouseContext";
import "./project.css";

const Project = ({ data }) => {
  const [isTouched, setIsTouched] = useState(false);
  const { cursorChangeHandler } = useContext(MouseContext)

  const handleTouchStart = () => {
    setIsTouched(true);
    cursorChangeHandler("hoverable")
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const creatMarkup = (str) => {
    return {__html: str}
  }
  return (
    <li
      className={isTouched ? "project touched" : "project"}
      style={{ backgroundImage: `url(${data.thumbnail})` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleTouchStart}
      onMouseLeave={handleTouchEnd}
    >
      <div className="project_container">
        <div className="project__title" dangerouslySetInnerHTML={creatMarkup(data.title)}></div>
      </div>
      <div className="project_details">
        <div className="left">Project Duration - {data.duration}</div>
        <div className="right">{data.period}</div>
      </div>
    </li>
  );
};

export default Project;
