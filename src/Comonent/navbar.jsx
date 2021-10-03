import React, { useState, useEffect } from "react";


const Navbar = () => {
  
  return (
    <header style={{position: "sticky", top: 0  }}>
      <div className="brandName">
        College Elections
      </div>
      <nav className="mobileMenuList">
        <ul>
          <a href="#Vote">
            <li>
              Vote
            </li>
          </a>
          <a href="#fileCandidature">
            <li>
              File Candidature
            </li>
          </a>
          <a href="#CandidateLogin">
            <li>
              Candidate Login
            </li>
          </a>
          <a href="#Results">
            <li>
              Results 
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;