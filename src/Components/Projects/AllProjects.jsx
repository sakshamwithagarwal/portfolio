import React from "react";
import Project from "./Project";

const AllProjects = () => {
  return (
    <section className="projects">
      <div className="section_title">
        <h3>Projects</h3>
      </div>
      <div className="section_container">
        <ol>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </ol>
      </div>
    </section>
  );
};

export default AllProjects;
