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
    <div class="px-4 pt-5 my-5 text-center">
      <h1 class="display-4 fw-bold text-body-emphasis">Centered screenshot</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">
            Primary button
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Secondary
          </button>
        </div>
      </div>
      <div class="overflow-hidden">
        <div class="container-fluid px-5">
          <img src={skb} class="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Home;
