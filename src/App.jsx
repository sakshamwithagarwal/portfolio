import React, { Suspense, lazy, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserView } from "react-device-detect";

const Home = lazy(() => import("./Pages/Home/Home"));
const Collection = lazy(() => import("./Pages/Collection/Collection"));
const ExpandedProject = lazy(() =>
  import("./Pages/ExpandedProject/ExpandedProject")
);

import { Noise, Cursor, Background } from "./Components";
const SplashScreen = lazy(() => import("./Components/SplashScreen/SplashScreen"))

import "./App.css";

function App() {
  const [isSplashOpen, setIsSplashOpen] = useState(true);
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

  return (
    <div className="App">
      {/* {isSplashOpen && <SplashScreen handleClick={onClickHandler} />} */}
      {/* <AnimatedCursor /> */}
      <BrowserView>
        <Cursor />
      </BrowserView>
      <Noise />
      <div>
        <RouterProvider router={router} />
      </div>
      <Background />
    </div>
  );
}

export default App;
