// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Switch
// } from "react-router-dom";
// import { Navbar, Nav } from 'react-bootstrap';
// import { FaHome, FaUserAlt, FaEnvelope } from 'react-icons/fa';
// import About from './About';
// import Home from './Home';
// import Contact from './Contact';

// function App() {
//   return (
//         <>
//         <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#">Digital Marketing Company</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="/" exact>
//               <FaHome /> Home
//             </Nav.Link>
//             <Nav.Link href="/about">
//               <FaUserAlt /> About Me
//             </Nav.Link>
//             <Nav.Link href="/contact">
//               <FaEnvelope /> Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
      
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Router>
//       </>
//   );
// }

// export default App;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="cover-container p-3">
            <h1>Welcome to our Digital Marketing Company</h1>
            <p>We provide various digital marketing services to help your business grow.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-container p-3">
            <h2>Our Services</h2>
            <ul>
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click Advertising (PPC)</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
