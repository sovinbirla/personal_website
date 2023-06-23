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
  return (
    <div class="hero" id="home">
      <div class="hero__container">
        <h1 class="hero__heading">
          <span>Welcome</span>
        </h1>
        <p class="hero__description">I am Sovin Birla</p>
        <button class="main__btn">
          <Link to="/about">Learn about me </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
