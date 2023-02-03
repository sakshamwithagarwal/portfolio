import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Collection, Home } from "./Pages";
import { Noise, SplashScreen, Cursor } from "./Components";
import "./App.css";
import { useRef } from "react";
import { gsap } from "gsap";

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
  // const cursorRef = {
  //   cursorBigCircle: useRef(null),
  //   cursorSmallCircle: useRef(null),
  // };
  const cursorBigCircle = useRef(null);
  const cursorSmallCircle = useRef(null);

  const moveCursor = (e) => {
    gsap.to(cursorBigCircle.current, {
      x: e.pageX - 15,
      y: e.pageY - 15,
      duration: 0.4,
    });

    gsap.to(cursorSmallCircle.current, {
      x: e.pageX - 5,
      y: e.pageY - 7,
      duration: 0.1,
    });
  };

  return (
    <div className="App" onMouseMove={moveCursor}>
      {/* <Cursor ref={cursorRef} /> */}

      <div className="cursor">
        <div className="cursor__ball cursor__ball--big" ref={cursorBigCircle}>
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
          </svg>
        </div>
        <div
          className="cursor__ball cursor__ball--small"
          ref={cursorSmallCircle}
        >
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
          </svg>
        </div>
      </div>

      <Noise />
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="circle"></div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
