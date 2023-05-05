import React, { useState, useEffect, forwardRef } from "react";
import projects from "../../assets/ProjectsList.json";
import Project from "./Project";
import { request, gql, GraphQLClient } from "graphql-request";

const AllProjects = forwardRef((props, ref) => {
  const [projectData, setProjectData] = useState(null);
  const PROJECT_QUERY = `
    {
      projects {
        id
        projectName
        projectDescription
        projectThumbnail {
          url
        }
        tags
        slug
      }
    }
  `;
  const endPointURL =
    "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master";

  // useEffect(() => {
  //   projectData.sort((a, b) => {
  //     return a.priority - b.priority;
  //   })
  // }, [projectData]);

  useEffect(() => {
    const fetchProjects = async () => {
      // const { projects } = await hygraph.request(PROJECT_QUERY)

      const { projects } = await request(endPointURL, PROJECT_QUERY);

      setProjectData(projects);
      console.log(projects);
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects" ref={ref} id="projects">
      <div className="section_title">
        <h3>Projects</h3>
      </div>
      <div className="section_container">
        {!projectData ? (
          "Loading"
        ) : (
          <ol>
            {projectData &&
              projectData.map((project, id) => (
                <Project key={id} data={project} />
              ))}
          </ol>
        )}
      </div>
    </section>
  );
});

export default AllProjects;
