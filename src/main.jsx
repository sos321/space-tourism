import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Router from "./router";

import "./static/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
);
