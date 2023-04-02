import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserView } from "react-device-detect";

import { Collection, Home, ExpandedProject } from "./Pages";
import {
  Noise,
  SplashScreen,
  Cursor,
  Background
} from "./Components";
import "./App.css";



function App() {
  const [isSplashOpen, setIsSplashOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collection",
        element: <Collection isOpen={isOpen} setIsOpen={setIsOpen} />,
      },
      {
        path: "/project/:id",
        element: <ExpandedProject isOpen={isOpen} setIsOpen={setIsOpen} />
      }
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
