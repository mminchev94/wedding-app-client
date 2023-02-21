import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BgVideo from "./components/BgVideo";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BgVideo />
    <Navbar />
    <App />
  </BrowserRouter>
);
