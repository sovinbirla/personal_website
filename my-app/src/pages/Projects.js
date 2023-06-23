import React from "react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
// import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  console.log("hereere");
  return (
    <div class="projects" id="projects">
      <h1>My experiences</h1>
      <div class="projects__wrapper">
        <div class="projects__card">
          <h2>Maven Wave</h2>
          <p>Tech Consulting</p>
          <div class="projects__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div class="projects__card">
          <h2>KPMG</h2>
          <p>Data Science Intern</p>
          <div class="projects__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div class="projects__card">
          <h2>Conagra</h2>
          <p>Software Engineering Intern</p>
          <div class="projects__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div class="projects__card">
          <h2>Fiserv</h2>
          <p>Software Engineering</p>
          <div class="projects__btn">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
