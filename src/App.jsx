import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Collection, Home } from "./Pages";
import { Noise, SplashScreen, Cursor } from "./Components";
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
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const circleRef = useRef(null);
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

  useEffect(() => {
    gsap.fromTo(
      line1Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 0.6 }
    );
    gsap.fromTo(
      line2Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 0.8 }
    );
    gsap.fromTo(
      line3Ref.current,
      { height: 0 },
      { height: "100%", duration: 1.4, delay: 1 }
    );
    gsap.fromTo(
      circleRef.current,
      { width: 0, height: 0 },
      { width: "29.27vw", height: "29.27vw", duration: 1, delay: 1.2 }
    );
  }, []);

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
      <div className="line-1" ref={line1Ref}></div>
      <div className="line-2" ref={line2Ref}></div>
      <div className="line-3" ref={line3Ref}></div>
      <div className="circle" ref={circleRef}></div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
