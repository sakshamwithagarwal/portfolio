import React, { Suspense, lazy, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserView } from "react-device-detect";

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

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Suspense fallback={<>loading...</>}>
            <Home />,
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
        path: "/project/:id",
        element: (
          <Suspense fallback={<>loading...</>}>
            <ExpandedProject isOpen={isOpen} setIsOpen={setIsOpen} />
          </Suspense>
        ),
      },
    ],
    { basename: "/" }
  );

  const onClickHandler = () => {
    setIsSplashOpen(false);
  };
  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
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
