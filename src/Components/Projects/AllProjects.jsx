import React from "react";
import projectData from "../../assets/ProjectsList.json";
import Project from "./Project";

const AllProjects = () => {
  return (
    <section className="projects">
      <div className="section_title">
        <h3>Projects</h3>
      </div>
      <div className="section_container">
        <ol>
          {projectData.projects.map((project, id) => (
            <Project key={id} data={project} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AllProjects;
