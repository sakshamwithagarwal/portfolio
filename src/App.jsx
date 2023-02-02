import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Collection, Home } from "./Pages";
import { Noise, SplashScreen } from "./Components";
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
