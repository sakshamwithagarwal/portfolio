import React, { Suspense, lazy, useState, useEffect, createRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import { request } from "graphql-request";
import LocomotiveScroll from "locomotive-scroll";

const Home = lazy(() => import("./Pages/Home/Home"));
const Collection = lazy(() => import("./Pages/Collection/Collection"));
const ExpandedProject = lazy(() =>
  import("./Pages/ExpandedProject/ExpandedProject")
);

import { Noise, Cursor, Background } from "./Components";
const Preloader = lazy(() => import("./Components/SplashScreen/Preloader"));

import "./App.css";

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

  // React Router
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Suspense fallback={<>loading...</>}>
            <Home handler={onClick} projects={projectData} />,
          </Suspense>
        ),
      },
      {
        path: "/collection",
        element: (
          <Suspense fallback={<>loading...</>}>
            <Collection isOpen={isOpen} setIsOpen={setIsOpen} />
          </Suspense>
        ),
      },
      {
        path: "/project/:slug",
        element: (
          <Suspense fallback={<>loading...</>}>
            <ExpandedProject
              projects={projectData}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </Suspense>
        ),
      },
    ],
    { basename: "/" }
  );

  // Preloader
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

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
        <>
          <div ref={scrollRef}>
            <RouterProvider router={router} />
          </div>
          <Background />{" "}
        </>
      )}
    </div>
  );
}

export default App;
