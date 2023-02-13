import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Collection, Home } from "./Pages";
import { Noise, SplashScreen, Cursor, Background } from "./Components";
import "./App.css";
import { useRef, useState, useEffect } from "react";
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
  const cursorBigCircle = useRef(null);
  const cursorSmallCircle = useRef(null);
  
  const [isSplashOpen, setIsSplashOpen] = useState(true);

  const onClickHandler = () => {
    setIsSplashOpen(false);
  };

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

  const onClickCursor = () => {
    gsap.fromTo(
      cursorBigCircle.current,
      { scale: 1.5, ease: "true" },
      { scale: 1, duration: 1.5 }
    );
  };

  

  return (
    <div
      className="App"
      onMouseMove={moveCursor}
      onTouchMove={moveCursor}
      onClick={onClickCursor}
    >
      {/* {isSplashOpen && <SplashScreen handleClick={onClickHandler} />} */}

      <div className="cursor">
        <div className="cursor__ball cursor__ball--big" ref={cursorBigCircle}>
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
        <div
          className="cursor__ball cursor__ball--small"
          ref={cursorSmallCircle}
        >
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>

      <Noise />
      <Background />
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
