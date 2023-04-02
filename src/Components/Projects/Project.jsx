import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./project.css";

const Project = ({ data }) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const creatMarkup = (str) => {
    return { __html: str };
  };
  return (
    <Link to={`project/${data.id}`}>
      <li
        className={
          isTouched ? "project touched hoverable" : "project hoverable"
        }
        style={{ backgroundImage: `url(${data.thumbnail})` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleTouchStart}
        onMouseLeave={handleTouchEnd}
      >
        <div className="project_container">
          <div
            className="project__title"
            dangerouslySetInnerHTML={creatMarkup(data.title)}
          ></div>
        </div>
        <div className="project_details">
          <div className="left">Project Duration - {data.duration}</div>
          <div className="right">{data.period}</div>
        </div>
      </li>
    </Link>
  );
};

export default Project;
