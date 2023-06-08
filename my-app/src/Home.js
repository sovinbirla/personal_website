import './Home.css';
import React from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
import Layout from './Layout';


function Home () {
    console.log("hereere");
    return (
        // <div class="hero">
        // <h1>Home Page</h1>
        // <br />
        // </div>
        // <Layout>
            <div class="hero">
                <h1>Welcome to Blue Landing Page</h1>
                <p>This is a modern landing page template designed in blue color scheme.</p>
                <ul>
                    <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/contactus">Contact Us</Link>
                    </li>
                </ul>
            </div>
        // </Layout>
    );

}

export default Home;