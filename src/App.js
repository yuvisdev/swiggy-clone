import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauMenu from "./components/RestrauMenu";

const Groccery = lazy(() => import("./components/Groccery"));

let AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

let createRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/restraunts/:restrauId",
        element: <RestrauMenu />,
      },
      {
        path: "/groccery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            {" "}
            <Groccery />{" "}
          </Suspense>
        ),
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={createRoutes} />);
// suspense is a componnet which comes from react we wrap our componenet inside it so it first called async and till the fallback will be displayed
