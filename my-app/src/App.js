import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Switch,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
// import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

// const scrollPos = window.scrollY;

// const [bool_highlight, setHighlight] = useState(false);

// const setHighlight (scrollPos) => {

//   if (scrollPos > 80px){

//   }
// }

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
