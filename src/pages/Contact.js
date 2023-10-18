import React from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import "../styles/Contact.css";

function Contact() {
  const myFunction = () => {
    // Copy the text inside the text field
    /* Copy selected text into clipboard */
    navigator.clipboard
      .writeText("sovin.birla123@gmail.com")
      .then(function (x) {
        alert("Link copied to clipboard: " + "sovin.birla123@gmail.com");
      });

    return <></>;
  };
  return (
    <div class="main" id="sign-up">
      <div class="main__container">
        <div class="contact__content">
          <h1>So.... that's me</h1>
          <p>Contact me if you have questions or concerns.</p>
          <button
            key="test"
            onClick={myFunction}
            class="contact_btn"
            title="clip">
            Email Me at
            <div class="clipboard">
              <p>sovin.birla123@gmail.com</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
