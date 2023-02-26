import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserView } from "react-device-detect";

import { Collection, Home } from "./Pages";
import {
  Noise,
  SplashScreen,
  Cursor,
  Background
} from "./Components";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/collection",
      element: <Collection />,
    },
  ],
  { basename: "/" }
);

function App() {
  const [isSplashOpen, setIsSplashOpen] = useState(true);
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
