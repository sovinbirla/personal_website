import React, { useState } from "react";
// import App from "../App";
import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div class="about_main">
      <div class="about__container">
        <div class="about__img--card">
          <img src="data:image/jpeg;base64,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" />{" "}
        </div>

        <div class="about__content">
          <h1>Who am I?</h1>
          <p>
            I am Sovin Birla. I am software engineer. I went to U of I and took
            some really cool courses and built some projects. I am will be going
            to Georgia Tech for a Master's in Quantitative and Computational
            Finance.
          </p>

          <div class="container_uiuc">
            <div className="uiuc-bloc-tabs">
              <div
                className={
                  toggleState === 1 ? "uiuc-tabs active-tabs" : "uiuc-tabs"
                }
                onClick={() => toggleTab(1)}>
                Coursework
              </div>
              <div
                className={
                  toggleState === 2 ? "uiuc-tabs active-tabs" : "uiuc-tabs"
                }
                onClick={() => toggleTab(2)}>
                Cool Stuff
              </div>
            </div>

            <div className="uiuc_content_tabs">
              <div
                className={
                  toggleState === 1
                    ? "uiuc_content active-content"
                    : "uiuc_content"
                }>
                <ul>
                  <li>Data Structures(CS 225)</li>
                  <li>Algorithms(CS 374)</li>
                  <li>Applied Machine Learning(CS 498)</li>
                  <li>Time Series Analysis(STAT 429)</li>
                  <li>Numerical Methods(CS 357)</li>
                </ul>
              </div>

              <div
                className={
                  toggleState === 2
                    ? "uiuc_content active-content"
                    : "uiuc_content"
                }>
                <ul>
                  <li>
                    <b>Monte Carlo Simulation Poker:</b>
                  </li>
                  <p>
                    I built the entire gameplay of Poker and used Markov Chain
                    Monte Simulation to calculate the winning hand probabilities
                    of each player after each round of play.
                  </p>
                  <li>
                    <b>Github Social Media:</b>
                    <p>
                      Built a react app and used axios to build a social media
                      app for software developers on campus by templating
                      Instagram's user profile.
                    </p>
                  </li>
                  <li>
                    <b>UNO Game:</b>
                    <p>
                      Built an interactive visualization for UNO gameplay in
                      Android Studio.
                    </p>
                  </li>
                  <li>
                    <b>Goodreads MongoDB Database:</b>
                    <p>
                      I scraped Goodreads using Beautiful Soup and stored the
                      top "x" number of books and authors in a MongoDB instance.
                      I then used GraphQL to post filtered API requests to a
                      React frontend.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="Gtech">
            <p></p>
            <p>Stay tuned more updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
