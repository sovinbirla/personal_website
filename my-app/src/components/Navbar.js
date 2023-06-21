import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-black text-bg"
      aria-label="Fifth navbar example">
      <div class="container-fluid">
        <a class="navbar-brand me-0" href="/">
          Sovin Birla
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarsExample05">
          <ul class="navbar-nav col-lg-6 justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/education">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="/">
    //       Navbar
    //     </a>
    //     <button
    //       class="navbar-toggler collapsed"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="navbar-collapse collapse" id="navbarNav">
    //       <ul class="navbar-nav me-auto mb-2 mb-md-0">
    //         <li class="nav-item active">
    //           <a class="nav-link" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="/about">
    //             Features
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="/education">
    //             Pricing
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="/contact">
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
