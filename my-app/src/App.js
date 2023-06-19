import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
// import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/education" exact element={<Education />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
