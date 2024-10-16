import React, { useState } from "react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { render } from "react-dom";

function Projects() {
  const experiences = [
    {
      id: 0,
      name: "Elevance Health",
      title: "Graduate Software Engineer",
      location: "Atlanta, GA",
      startDate: "May 2024",
      endDate: "Aug 2024",
      // image_url:
      //   "https://www.mavenwave.com/wp-content/uploads/2014/10/image03.png",
      // points: [
      //   "Extracted data to forecast In-N-Out locations’ exposure to flood risk using Big Query, Keras, Pandas, and Plotly",
      //   "Deployed the full stack In-N-Out application using Django and React to GKE clusters in GCP using Helm charts for multiple versioning",
      //   "Served a full stack Dockerized application with React and Firebase for a plug-and-play POS system, for Mcdonald's with Raspberry Pi’s as Edge terminals, as a solution to main POS system failure",
      // ], // title: "SWE",
      // location: "Chicago, IL",
      // startDate: "Jun 2021",
      // endDate: "Jan 2023",
      // image_url:
      //   "https://www.mavenwave.com/wp-content/uploads/2014/10/image03.png",
      // points: [
      //   "Extracted data to forecast In-N-Out locations’ exposure to flood risk using Big Query, Keras, Pandas, and Plotly",
      //   "Deployed the full stack In-N-Out application using Django and React to GKE clusters in GCP using Helm charts for multiple versioning",
      //   "Served a full stack Dockerized application with React and Firebase for a plug-and-play POS system, for Mcdonald's with Raspberry Pi’s as Edge terminals, as a solution to main POS system failure",
      // ],
    },
    {
      id: 1,
      name: "Maven Wave",
      title: "SWE",
      location: "Chicago, IL",
      startDate: "Jun 2021",
      endDate: "Jan 2023",
      image_url:
        "https://www.mavenwave.com/wp-content/uploads/2014/10/image03.png",
      points: [
        "Extracted data to forecast In-N-Out locations’ exposure to flood risk using Big Query, Keras, Pandas, and Plotly",
        "Deployed the full stack In-N-Out application using Django and React to GKE clusters in GCP using Helm charts for multiple versioning",
        "Served a full stack Dockerized application with React and Firebase for a plug-and-play POS system, for Mcdonald's with Raspberry Pi’s as Edge terminals, as a solution to main POS system failure",
      ],
    },
    {
      id: 2,
      name: "KPMG",
      title: "Data Science Intern",
      location: "Manhattan, NY",
      startDate: "Jun 2020",
      endDate: "Aug 2020",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg",
      points: [
        "Purposed the Zillow API to classify areas of highest price increase in appreciation rates given any region",
        "Learned about reading real estate data and implementing HTTP requests with the MLS Record API",
        "Communicated with execs in the Lighthouse Analytics practice to discover more about their practice and their specific functions within their vertical",
      ],
    },
    // {
    //   id: 3,
    //   name: "Conagra Brands",
    //   title: "SWE Intern",
    //   location: "Omaha, NE",
    //   startDate: "Jun 2020",
    //   endDate: "Aug 2020",
    //   points: [
    //     "Built an Ionic app with an Angular Framework for plants to avoid plant workers from re-touching the punch-in-the-clock amidst the COVID-19 scare",
    //     "Improved efficiency by 13.7% across all 67 manufacturing plants with time-keeping the app",
    //     "Led a team of 15 interns to provide educational support to students interested in CS from the Big Brother Big Sister organization",
    //   ],
    // },
    // {
    //   id: 4,
    //   name: "Fiserv",
    //   title: "SWE Intern",
    //   location: "Omaha, NE",
    //   startDate: "Jun 2019",
    //   endDate: "Aug 2019",
    //   points: [
    //     "Wrote React code to build an app, Jobpose, to serve as an internal job search website",
    //     "Created SQL databases in Toad for Fiserv clients with specific field requirements in the PRD environment with PeopleSoft",
    //     "Worked on processes that prepped sensitive data for the production environment with VBA",
    //   ],
    // },
    {
      id: 5,
      name: "IRisk Lab",
      title: "Quantitative Research Assistant",
      location: "Champaign, IL",
      startDate: "Aug 2018",
      endDate: "Dec 2018",
      image_url:
        "https://media.licdn.com/dms/image/C4E0BAQH9W23qd7z8YA/company-logo_200_200/0/1555703173496?e=2147483647&v=beta&t=jVuE2GLE4X0lDmBzyiYTF8p9opJk6FeTjo8Lu6JAsX8",
      points: [
        "Worked under Professor Linders to confirm his theory about the HIX(Herd-Behavior Index), a derivation of the VIX (Volatility Index)",
        "Analyzed S&P 500 options data to figure out the behavior of the market after major disruptions",
        "Used Python to formulate edge cases using pytest for the HIX index and MySQL to tabulate the vast options data",
      ],
    },
  ];

  // const closeCard = ({experience.id}) => setFlip(false);

  const listExperiences = experiences.map((experience) => (
    <div class="front_card" key={experience.id}>
      {/* <img src={experience.image_url} /> */}
      <h1>{experience.name}</h1>
      <h3>{experience.title}</h3>
      <h3>{experience.location}</h3>
      <p>
        {experience.startDate} - {experience.endDate}
      </p>
      {/* {experience.points.map((point) => (
        <p>{point}</p>
      ))} */}
    </div>
  ));

  return (
    <div class="projects" id="projects">
      <div className="title">Experiences</div>
      <div class="projects__wrapper">{listExperiences}</div>
    </div>
  );
}

export default Projects;

function Project({ experience }) {
  const [flip, setFlip] = useState(false);

  const flipCard = () => setFlip(!flip);

  const front_list = (
    <div class="front_card" key={experience.id}>
      <h1>{experience.name}</h1>
      <h3>{experience.title}</h3>
      <h3>{experience.location}</h3>
      {experience.startDate} - {experience.endDate}
      <button onClick={flipCard}>Flip</button>
    </div>
  );

  const back_list = (
    <div class="front_card" key={experience.id}>
      {experience.points.map((point) => (
        <p>{point}</p>
      ))}
      <button onClick={flipCard}>Flip</button>
    </div>
  );

  return flip ? front_list : back_list;
}
