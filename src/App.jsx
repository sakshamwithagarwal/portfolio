import React, { lazy, useState, useEffect, createRef } from "react";
import { BrowserView } from "react-device-detect";
import { request } from "graphql-request";
import { Noise, Cursor, Background, Navbar } from "./Components";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRouters from "./Components/AnimatedRoutes/AnimatedRouters";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Components/SplashScreen/Preloader";
import { usePresence } from "framer-motion";
import "./App.css";
// const Preloader = lazy(() => import("./Components/SplashScreen/Preloader"));

function App() {
  const scrollRef = createRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

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

  useEffect(() => {
    const onPageLoad = () => {
      console.log("page loaded");
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  // 📨 Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      const { projects } = await request(
        projectQuery.endPointURL,
        projectQuery.PROJECT_QUERY
      );
      // .then((data) => setProjectData(data))
      // .catch((error) => console.log(error));

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
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="App">
      {/* {isSplashOpen && <SplashScreen handleClick={onClickHandler} />} */}
      {/* <AnimatedCursor /> */}
      <BrowserView>
        <Cursor />
      </BrowserView>
      <Noise />
      <Background />
      <AnimatePresence>
        {isLoading ? (
          <Preloader key={"preloader"} theme={theme} />
        ) : (
          <Router>
            <div ref={scrollRef}>
              <Navbar
                handler={onClick}
                isOpen={isHamburgerOpen}
                setIsOpen={setIsHamburgerOpen}
              />
              <AnimatedRouters
                key={"components"}
                projectData={projectData}
                isOpen={isHamburgerOpen}
              />
            </div>
          </Router>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
