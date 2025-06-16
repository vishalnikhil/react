import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./src/components/Contact";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement:<Error></Error>
    
  },
  {
    path: "/about",
    element: <About />,
  },

  {
     path:"/contact",
     element:<Contact/>

  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
