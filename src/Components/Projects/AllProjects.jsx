import React, { useState, useEffect, forwardRef } from "react";
import Project from "./Project";
import { motion } from "framer-motion";

const AllProjects = forwardRef((props, ref) => {
  // useEffect(() => {
  //   projectData.sort((a, b) => {
  //     return a.priority - b.priority;
  //   })
  // }, [projectData]);
  return (
    <section className="projects" ref={ref} id="projects">
      <motion.div className="section_title" initial={{y: 100}} whileInView={{y: 0}} transition={{ease: "easeInOut"}}>
        <h3>Projects</h3>
      </motion.div>
      <div className="section_container">
        {!props.projects ? (
          "Loading"
        ) : (
          <motion.ol initial={{y: 100}} whileInView={{y: 0}} transition={{ease: "easeInOut", delay: 0}}>
            {props.projects &&
              props.projects.map((project, id) => (
                <Project key={project.id} data={project} />
              ))}
          </motion.ol>
        )}
      </div>
    </section>
  );
});

export default AllProjects;
