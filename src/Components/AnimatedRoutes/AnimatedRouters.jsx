import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../../Pages/Home/Home"));
const Collection = lazy(() => import("../../Pages/Collection/Collection"));
const ExpandedProject = lazy(() =>
  import("../../Pages/ExpandedProject/ExpandedProject")
);

const AnimatedRouters = ({ handler, projectData, isOpen, setIsOpen }) => {
  const location = useLocation();

  // React Router
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Suspense fallback={<>loading...</>}>
            <Home handler={handler} projects={projectData} />,
          </Suspense>
        ),
      },
      {
        path: "/collection",
        element: (
          <Suspense fallback={<>loading...</>}>
            <Collection isOpen={isOpen} setIsOpen={setIsOpen} />
          </Suspense>
        ),
      },
      {
        path: "/project/:slug",
        element: (
          <Suspense fallback={<>loading...</>}>
            <ExpandedProject
              projects={projectData}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </Suspense>
        ),
      },
    ],
    { basename: "/" }
  );
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Suspense fallback={<>loading...</>}>
                <Home handler={handler} projects={projectData} />,
              </Suspense>
            }
          />
          <Route
            path="/collection"
            element={
              <Suspense fallback={<>loading...</>}>
                <Collection isOpen={isOpen} setIsOpen={setIsOpen} />
              </Suspense>
            }
          />
          <Route
            path="/project/:slug"
            element={
              <Suspense fallback={<>loading...</>}>
                <ExpandedProject
                  projects={projectData}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      {/* <AnimatePresence>
        <RouterProvider router={router} />;
      </AnimatePresence> */}
    </>
  );
};

export default AnimatedRouters;
