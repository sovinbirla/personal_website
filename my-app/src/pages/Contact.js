import React from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
// import App from "../App";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { IconContext } from "react-icons";

function Contact() {
  console.log("hereere");
  return (
    <div class="main" id="sign-up">
      <div class="main__container">
        <div class="main__content">
          <h1>Come Through</h1>
          <p>Contact me if you have questions or conerns</p>
          <button class="main__btn">
            <a href="#">Sign Up</a>
          </button>
          <div className="socials">
            <IconContext.Provider
              value={{ className: "shared-class", size: 40 }}>
              <>
                <BsFacebook />
                <BsGithub />
                <BsInstagram />
                <BsLinkedin />
                <BsTwitter />
              </>
            </IconContext.Provider>
          </div>
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
