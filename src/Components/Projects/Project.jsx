import React, { useRef, useState } from "react";
import "./project.css";

const Project = ({data}) => {
  return (
    <li className="project" style={{backgroundImage: `url(${data.thumbnail})`}}>
      <div className="project_container">
      <div className="project__title">{ data.title }</div>
      </div>
      <div className="project_details">
        <div className="left">Project Duration - { data.duration }</div>
        {/* <div className="right">August &#39;21 - October &#39;21</div> */}
        <div className="right">{ data.period }</div>
      </div>
    </li>
  );
};

export default Project;
