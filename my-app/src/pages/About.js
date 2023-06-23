import React from "react";
import App from "../App";
import "../styles/About.css";

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
            {/* <i class="fas fa-layer-group"> */}
            <img
              // class="swag"
              // alt="test"
              src="data:image/jpeg;base64,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"
            />
            {/* </i> */}
          </div>
        </div>
        <div class="main__content">
          <h1>Who am I?</h1>
          <h2>I am a software engineer.</h2>
          <p>I'll fill this shit out later.</p>
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
