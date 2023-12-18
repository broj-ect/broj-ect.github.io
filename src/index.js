/** Imports */
/** Basic */
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
/** Styles */
import "./styles/style.css";
/** Custom */
import App from "./App";
/** */
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
