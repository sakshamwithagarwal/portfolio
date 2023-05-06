import React, { useState, useEffect, forwardRef } from "react";
import Project from "./Project";

const AllProjects = forwardRef((props, ref) => {
  // useEffect(() => {
  //   projectData.sort((a, b) => {
  //     return a.priority - b.priority;
  //   })
  // }, [projectData]);
  return (
    <section className="projects" ref={ref} id="projects">
      <div className="section_title">
        <h3>Projects</h3>
      </div>
      <div className="section_container">
        {!props.projects ? (
          "Loading"
        ) : (
          <ol>
            {props.projects &&
              props.projects.map((project, id) => (
                <Project key={id} data={project} />
              ))}
          </ol>
        )}
      </div>
    </section>
  );
});

export default AllProjects;
