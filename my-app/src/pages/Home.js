import React from "react";

import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import App from "../App";

function Home() {
  console.log("hereere");
  return <div className="home">Main page</div>;
}

export default Home;
