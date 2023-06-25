import React from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
// import App from "../App";
import "../styles/Home.css";

function Home() {
  return (
    <div class="hero" id="home">
      <div class="hero__container">
        <h1 class="hero__heading">
          <span>Welcome</span>
        </h1>
        <p class="hero__description">I am Sovin Birla</p>
        <Link to="/about" class="hero__btn">
          Learn about me
        </Link>
      </div>
    </div>
  );
}

export default Home;
