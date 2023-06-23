import React from "react";
import App from "../App";

function About() {
  const experiences = [
    {
      id: 1,
      name: "Maven Wave",
      title: "Software Engineer",
      location: "Chicago, IL",
      startDate: "Jun 2021",
      endDate: "Jan 2023",
      points: [
        "Extracted data to forecast In-N-Out locations’ exposure to flood risk using Big Query, Keras, Pandas, and Plotly",
        "Deployed the full stack In-N-Out application using Django and React to GKE clusters in GCP using Helm charts for multiple versioning",
        "Served a full stack Dockerized application with React and Firebase for a plug-and-play POS system, for Mcdonald's with Raspberry Pi’s as Edge terminals, as a solution to main POS system failure",
        "Used USI client data to build a recommendation solutions catalog for insurance providers and built frontend in C# whilst connecting to a Postgres SQL Database",
      ],
    },
    {
      id: 2,
      name: "KPMG",
      title: "Data Science Intern",
      location: "Manhattan, NY",
      startDate: "Jun 2020",
      endDate: "Aug 2020",
      points: [
        "Purposed the Zillow API to classify areas of highest price increase in appreciation rates given any region",
        "Learned about reading real estate data and implementing HTTP requests with the MLS Record API",
        "Communicated with execs in the Lighthouse Analytics practice to discover more about their practice and their specific functions within their vertical",
      ],
    },
    {
      id: 3,
      name: "Conagra Brands",
      title: "Software Engineering Intern",
      location: "Omaha, NE",
      startDate: "Jun 2020",
      endDate: "Aug 2020",
      points: [
        "Built an Ionic app with an Angular Framework for plants to avoid plant workers from re-touching the punch-in-the-clock amidst the COVID-19 scare",
        "Improved efficiency by 13.7% across all 67 manufacturing plants with time-keeping the app",
        "Led a team of 15 interns to provide educational support to students interested in CS from the Big Brother Big Sister organization",
      ],
    },
    {
      id: 4,
      name: "Fiserv",
      title: "Software Engineering Intern",
      location: "Omaha, NE",
      startDate: "Jun 2019",
      endDate: "Aug 2019",
      points: [
        "Wrote React code to build an app, Jobpose, to serve as an internal job search website",
        "Created SQL databases in Toad for Fiserv clients with specific field requirements in the PRD environment with PeopleSoft",
        "Worked on processes that prepped sensitive data for the production environment with VBA",
      ],
    },
    {
      id: 5,
      name: "IRisk Lab",
      title: "Quantitative Research Assistant",
      location: "Champaign, IL",
      startDate: "Aug 2018",
      endDate: "Dec 2018",
      points: [
        "Worked under Professor Linders to confirm his theory about the HIX(Herd-Behavior Index), a derivation of the VIX (Volatility Index)",
        "Analyzed S&P 500 options data to figure out the behavior of the market after major disruptions such as the 2009 Flash Crash, Presidential elections, and Brexit",
        "Used Python to formulate edge cases using pytest for the HIX index and MySQL to tabulate the vast options data",
      ],
    },
  ];

  return (
    <div class="main" id="about">
      <div class="main__container">
        <div class="main__img--container">
          <div class="main__img--card">
            <i class="fas fa-layer-group"></i>
          </div>
        </div>
        <div class="main__content">
          <h1>Who am I?</h1>
          <h2>I am a creator</h2>
          <p>Schedule a call to learn more about our services</p>
          <button class="main__btn">
            <a href="#">Contact Me</a>
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* function Experience({name, startDate, endDate, bulletPoints=[]}){
    return (
        <div className='about'>
            
        </div>
    )
} */
}

export default About;
