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

function Contact() {
  const myFunction = () => {
    // Copy the text inside the text field
    navigator.clipboard.writeText("sovin.birla123@gmail.com");

    // Alert the copied text
    alert("Copied Sovin's Email");

    return <></>;
  };
  return (
    <div class="main" id="sign-up">
      <div class="main__container">
        <div class="contact__content">
          <h1>So.... that's me</h1>
          <p>Contact me if you have questions or concerns.</p>
          <button key="test" class="contact_btn">
            Email Me <span>at sovin.birla123@gmail.com</span>
          </button>
        </div>
        {/* <div class="contact__img--container">
          <div class="contact__img--card">
             <img src="https://u-static.fotor.com/images/text-to-image/result/PRO-ca46ab06f1d043929524a44fa3316cf5.jpg" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
