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

function Contact() {
  console.log("hereere");
  return (
    <div class="main" id="sign-up">
      <div class="main__container">
        <div class="main__content">
          <h1>Join Our Team</h1>
          <h2>Sign Up Today</h2>
          <p>See what makes us different</p>
          <button class="main__btn">
            <a href="#">Sign Up</a>
          </button>
        </div>
        <div class="main__img--container">
          <div class="main__img--card" id="card-2">
            <i class="fas fa-users"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
