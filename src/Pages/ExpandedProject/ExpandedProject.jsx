import React, { useEffect, useState, createRef } from "react";
import locomotiveScroll from "locomotive-scroll";
import { useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./project.css";

import { SimpleNav } from "../../Components";

const ExpandedProject = ({ projects, isOpen, setIsOpen }) => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    (async () => {
      const projectData = await projects.find(
        (project) => project.slug === slug
      );
      setProject(projectData);
      console.log(project);
    })();

    return () => {};
  }, []);

  return (
    <m.div
      className="project-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, delay: 0.5, ease: "easeOut" }}
    >
      <SimpleNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isOpen && project && project ? (
        <div
          className="project-main"
          // data-scroll
          // data-scroll-speed="7"
          // data-scroll-position="top"
          // ref={scrollRef}
        >
          <div
            className="project-content-container"
            dangerouslySetInnerHTML={{ __html: project.projectContent.html }}
          ></div>
          <div className="project-next"></div>
        </div>
      ) : (
        ""
      )}
    </m.div>
  );
};

export default ExpandedProject;
