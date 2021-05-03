import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import me from "../images/me2.jpg";
import "../css/Resume.css";

class Resume extends Component {
  render() {
    return (
      <>
        <h1 className="aboutheader">About Me</h1>
        <div className="resume-wrapper">
          <div className="about-me">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <button className="about-button">Resume</button>
          <div className="about-photo">
            <img src={me} height="500px" alt="me"></img>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
