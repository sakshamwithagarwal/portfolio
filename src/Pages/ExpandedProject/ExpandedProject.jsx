import React, { useEffect, useState } from "react";
import locomotiveScroll from "locomotive-scroll";
import { useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import { request } from "graphql-request";
import "./project.css";

const ExpandedProject = ({ projects, isOpen, setIsOpen }) => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const projectVariants = {
    hidden: {
      opacity: 0,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
      y: -96,
    },
    visible: {
      opacity: 1,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
      y: 0,
    },
  };
  const projectQuery = {
    PROJECT_QUERY: `
    {
      project(where: {slug: "${slug}"}) {
        id
        projectName
        projectThumbnail {
          url
        }
        slug
        projectContent {
          html
        }
      }
    }
  `,
    endPointURL:
      "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master",
  };

  // 📨 Fetch project
  useEffect(() => {
    const fetchProjects = async () => {
      const { project } = await request(
        projectQuery.endPointURL,
        projectQuery.PROJECT_QUERY
      );
      setProject(project);
    };

    fetchProjects();
    return () => {
      setProject(null);
    };
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const projectData = await projects.find(
  //       (project) => project.slug === slug
  //     );
  //     setProject(projectData);
  //     console.log(project);
  //   })();

  //   return () => {};
  // }, []);

  return (
    <m.div
      className="project-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, delay: 0.5, ease: "easeOut" }}
    >
      {!isOpen && project ? (
        <m.div
          className="project-main"
          // data-scroll
          // data-scroll-speed="7"
          // data-scroll-position="top"
          // ref={scrollRef}
          variants={{
            hidden: { staggerChildren: 0.1, staggerDirection: -1 },
            visible: { staggerChildren: 0.1, staggerDirection: -1 },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <m.div
            variants={projectVariants}
            className="project-content-container"
            dangerouslySetInnerHTML={{ __html: project.projectContent.html }}
          ></m.div>
          <div className="project-next"></div>
        </m.div>
      ) : (
        ""
      )}
    </m.div>
  );
};

export default ExpandedProject;
