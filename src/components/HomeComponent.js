import React, { Component } from "react";
import hero from "../images/hero.MOV";
import "../css/HomeComponent.css";
import Navbar from "../components/Navbar";

export default class HomeComponent extends Component {
  render() {
    return (
      <>
        <div className="homewrap">
          <div className="writing">
            <h1 className="write">
              FULL STACK
              <br /> DEVELOPER
            </h1>
            <div className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

          <video
            className="video"
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "110vh",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          >
            <source src={hero} type="video/mp4" />
          </video>
        </div>
      </>
    );
  }
}
