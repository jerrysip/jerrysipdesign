import React, { Component } from "react";
import hero from "../images/hero.MOV";
import "../css/HomeComponent.css";

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
              A lover of all things beauty and technology. Proficient in HTML,
              CSS, Bootstrap, Javascript, React, React Native, Node.js,
              Express.js, and MongoDB. A passion to learn and create.
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
