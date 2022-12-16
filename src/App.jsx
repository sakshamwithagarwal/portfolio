import { createRef, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import locomotiveScroll from "locomotive-scroll";

import { Home } from "./Pages";

import "./App.css";
// import { Navbar } from "./Components";
import { Navbar } from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  const scrollRef = createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <div className="App" ref={scrollRef}>
      <div>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="circle"></div>
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
