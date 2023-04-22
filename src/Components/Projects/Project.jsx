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
      <li className="project hoverable">
        <div className="thumbnail_wrapper">
          <img src={data.thumbnail} alt="" className="project__thumbnail" />
        </div>
        <div className="project_container">
          <div className="project__title"> {data.title} </div>
          <p className="project__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            odio, libero mollitia doloribus iure assumenda et voluptate labore
            fugit omnis consectetur inventore vel magni ex natus atque adipisci
            cum quas.
          </p>
        </div>
      </li>
    </Link>
  );
};

export default Project;
