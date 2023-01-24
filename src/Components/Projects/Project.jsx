import React, { useRef, useState } from "react";
import "./project.css";

const Project = ({ data }) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  return (
    <li
      className={isTouched ? "project touched" : "project"}
      style={{ backgroundImage: `url(${data.thumbnail})` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="project_container">
        <div className="project__title">{data.title}</div>
      </div>
      <div className="project_details">
        <div className="left">Project Duration - {data.duration}</div>
        <div className="right">{data.period}</div>
      </div>
    </li>
  );
};

export default Project;
