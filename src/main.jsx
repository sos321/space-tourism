import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./static/index.css";
import Index from "./pages/index";
import Destination from "./pages/destination";
import Navigation from "./components/navigation";
import Technology from "./pages/technology";
import Crew from "./pages/Crew";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
