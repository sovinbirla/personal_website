import React from "react";
import skb from "./SKB.png";
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
          Choose your <span>colors</span>
        </h1>
        <p class="hero__description">Unlimited Possibilities</p>
        <button class="main__btn">
          <a href="#">Explore</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
