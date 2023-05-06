import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./project.css";

import { SimpleNav } from "../../Components";

const ExpandedProject = ({ projects, isOpen, setIsOpen }) => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    const project = projects.find((project) => project.slug === slug);
    setProject(project);
    // console.log(project);
  }, []);

  return (
    <>
      <SimpleNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isOpen && project && project ? (
        <div className="project-main">
          <div
            className="project-content-container"
            dangerouslySetInnerHTML={{ __html: project.projectContent.html }}
          ></div>
          <div className="project-next"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ExpandedProject;
