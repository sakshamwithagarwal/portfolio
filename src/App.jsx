import React, { lazy, useState, useEffect, createRef } from "react";
import { BrowserView } from "react-device-detect";
import { request } from "graphql-request";
import { Noise, Cursor, Background } from "./Components";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRouters from "./Components/AnimatedRoutes/AnimatedRouters";

import "./App.css";
const Preloader = lazy(() => import("./Components/SplashScreen/Preloader"));

function App() {
  const scrollRef = createRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [projectData, setProjectData] = useState(null);
  const projectQuery = {
    PROJECT_QUERY: `
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
        projectContent {
          html
        }
      }
    }
  `,
    endPointURL:
      "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master",
  };

  // 📨 Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      const { projects } = await request(
        projectQuery.endPointURL,
        projectQuery.PROJECT_QUERY
      );

      setProjectData(projects);
      // console.log(projects);
    };

    fetchProjects();
  }, []);

  // 🎨 Color theme switcher
  const storageKey = "theme-preference";
  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  };

  const theme = { value: getColorPreference() };

  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
  };

  const onClick = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    setPreference();
  };

  const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme.value);

    document
      .querySelector("#theme-toggle")
      ?.setAttribute("aria-label", theme.value);
  };

  reflectPreference();

  window.onload = () => {
    reflectPreference();
  };

  // Preloader
  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div className="App">
      {/* {isSplashOpen && <SplashScreen handleClick={onClickHandler} />} */}
      {/* <AnimatedCursor /> */}
      <BrowserView>
        <Cursor />
      </BrowserView>
      <Noise />
      {isLoading ? (
        <Preloader theme={theme} />
      ) : (
        <Router>
          <div ref={scrollRef}>
            <AnimatedRouters handler={onClick} projectData={projectData} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <Background />{" "}
        </Router>
      )}
    </div>
  );
}

export default App;
