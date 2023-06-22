import React from "react";

import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  console.log("hereere");
  return (
    <div class="services" id="services">
      <h1>Our Services</h1>
      <div class="services__wrapper">
        <div class="services__card">
          <h2>Custom Colorways</h2>
          <p>AI Powered technology</p>
          <div class="services__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div class="services__card">
          <h2>Are you Ready?</h2>
          <p>Take the lepa</p>
          <div class="services__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div class="services__card">
          <h2>Full Gradients</h2>
          <p>100 Combinations</p>
          <div class="services__btn">
            <button>Get Started</button>
          </div>
        </div>
        <div class="services__card">
          <h2>Infinite Choices</h2>
          <p>1000's of colors</p>
          <div class="services__btn">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
