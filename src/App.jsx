import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Collection, Home } from "./Pages";
import { Noise, SplashScreen, Cursor, Background } from "./Components";

import MouseContextProvider from "./context/MouseContext";
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
    <MouseContextProvider>
      <div className="App">
        {/* {isSplashOpen && <SplashScreen handleClick={onClickHandler} />} */}
        <Cursor />
        <Noise />
        <div>
          <RouterProvider router={router} />
        </div>
        <Background />
      </div>
    </MouseContextProvider>
  );
}

export default App;
