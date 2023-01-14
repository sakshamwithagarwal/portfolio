import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import { Collection, Home } from "./Pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collection",
    element: <Collection />
  }
], {basename: "/portfolio/"});

function App() {
  

  return (
    <div className="App" >
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
