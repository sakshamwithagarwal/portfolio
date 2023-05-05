import React, { Suspense, lazy, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import { request } from "graphql-request";

const Home = lazy(() => import("./Pages/Home/Home"));
const Collection = lazy(() => import("./Pages/Collection/Collection"));
const ExpandedProject = lazy(() =>
  import("./Pages/ExpandedProject/ExpandedProject")
);

import { Noise, Cursor, Background } from "./Components";
const Preloader = lazy(() => import("./Components/SplashScreen/Preloader"));

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
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
        projectContent {
          html
        }
      }
    }
  `;
  const endPointURL =
    "https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master";

  useEffect(() => {
    const fetchProjects = async () => {
      // const { projects } = await hygraph.request(PROJECT_QUERY)

      const { projects } = await request(endPointURL, PROJECT_QUERY);

      setProjectData(projects);
      console.log(projects);
    };

    fetchProjects();
  }, []);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Suspense fallback={<>loading...</>}>
            <Home projects={projectData} />,
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
            <ExpandedProject projects={projectData} isOpen={isOpen} setIsOpen={setIsOpen} />
          </Suspense>
        ),
      },
    ],
    { basename: "/" }
  );

  // * preloader
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
        <Preloader />
      ) : (
        <>
          <div>
            <RouterProvider router={router} />
          </div>
          <Background />{" "}
        </>
      )}
    </div>
  );
}

export default App;
