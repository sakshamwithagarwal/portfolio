import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import { Collection, Home } from "./Pages";

import "./App.css";
import { Noise, SplashScreen } from "./Components";

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
  return (
    <div className="App">
      <Noise />
      {/* <SplashScreen /> */}

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
