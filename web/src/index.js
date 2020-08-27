import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./views/App";

import "./css/main.scss";

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);