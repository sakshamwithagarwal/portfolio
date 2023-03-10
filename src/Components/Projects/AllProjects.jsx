import React, { useState, useEffect, forwardRef } from "react";
import projects from "../../assets/ProjectsList.json";
import Project from "./Project";


const AllProjects = forwardRef((props, ref) => {
  const [projectData, setProjectData] = useState(projects.projects);

  useEffect(() => {
    projectData.sort((a, b) => {
      return a.priority - b.priority;
    })
    // console.log(projectData);
  }, [projectData]);

  return (
    <section className="projects" ref={ref} id="projects">
      <div className="section_title">
        <h3>Projects</h3>
      </div>
      <div className="section_container">
        <ol>
          {projectData.map((project, id) => (
            <Project key={id} data={project} />
          ))}
        </ol>
      </div>
    </section>
  );
});

export default AllProjects;
