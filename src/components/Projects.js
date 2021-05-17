import React from "react";

import "../css/Projects.css";
import vidproject from "../images/projects.mp4";
import jerrysiphair from "../images/jerrysiphair.jpeg";
import camp from "../images/camp.jpeg";
import splitend from "../images/split-end.jpeg";
import illission from "../images/illission.jpeg";
import { Container, Col, Row } from "react-bootstrap";

export default function Projects() {
  return (
    <>
      <div classname="homewrap">
        <video
          className="vidprojects"
          autoPlay
          loop
          muted
          // style={{
          //   position: "absolute",
          //   width: "100%",
          //   left: "50%",
          //   top: "50%",
          //   height: "110vh",
          //   objectFit: "cover",
          //   transform: "translate(-50%, -50%)",
          //   zIndex: "-1",
          // }}
        >
          <source src={vidproject} type="video/mp4" />
        </video>
      </div>

      <div className="hair-container">
        <Container fluid>
          <Row>
            <Col xs={12} lg={8} xl={6} className="text-center pl-0 pt-5 mb-5">
              <div className="hair-photo">
                <img
                  className="hair"
                  src={jerrysiphair}
                  width="600px"
                  alt="Logo"
                />
              </div>
            </Col>

            <Col
              xs={12}
              lg={4}
              xl={6}
              className="text-center mt-5 mt-lg-0 pt-5"
              style={{
                backgroundColor: "white",
                position: "relative",
                bottom: ".5rem",
              }}
            >
              {" "}
              <div className="hair-detail mt-4">
                <h2 className="hair-title">JERRYSIPHAIR</h2>
                <br />
                <p>HTML/CSS</p>

                <p>JAVASCRIPT</p>
                <p>REACT</p>
                <p>BOOTSTRAP</p>
                <p>REACTSTRAP</p>
                <a
                  href="http://www.jerrysiphair.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="hair-button">Check it out</button>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-5 " style={{ background: "black" }}>
            <Col
              xs={12}
              lg={4}
              xl={6}
              className="text-center text-white mt-5 mt-lg-0 pt-5 mb-5 pb-5"
            >
              <div className="illission-detail">
                <h2 className="illission-title">THE ILLISSION PROJECT</h2>
                <br />
                <p>HTML/CSS</p>

                <p>JAVASCRIPT</p>
                <p>BOOTSTRAP</p>
                <p>REACTSTRAP</p>
                <p>REDUX</p>
                <p>MERN Stack</p>
                <p>StripeAPI</p>
                <p>MailChimp</p>
                <a
                  href="https://www.jerrysip.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="illission-button">Check it out</button>
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              lg={8}
              xl={6}
              className="text-center pl-0 pt-5 mb-5 pb-5"
            >
              <img
                className="illission-photo"
                src={illission}
                width="600px"
                height="auto"
                alt="Logo"
              />
            </Col>
          </Row>
          <Row className="mt-5 ml-0 pl-0 bg-white">
            <Col xs={12} lg={6} xl={5} className="text-center pl-0 ">
              <div className="splitend-photo ml-5 pl-5 ml-xs-0 pl-xs-0">
                <img
                  className="se-photo"
                  src={splitend}
                  width="500px"
                  alt="Logo"
                />
              </div>
            </Col>

            <Col
              xs={12}
              lg={6}
              xl={7}
              className="text-center mt-5 mt-lg-0 pt-5 pr-5"
            >
              <div className="splitend-detail">
                <h2 className="splitend-title">SPLIT-END</h2>
                <br />
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>REACT-NATIVE</p>
                <p>BOOTSTRAP</p>
                <p>REACTSTRAP</p>
                <p>MERN STACK</p>
                <button className="splitend-button">Under Construction</button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-5 " style={{ background: "black" }}>
            <Col
              xs={12}
              lg={4}
              xl={6}
              className="text-center text-white mt-5 mt-lg-0 pt-5 mb-5 pb-5"
            >
              <div className="camp-detail">
                <h2 className="camp-title">CAMP</h2>
                <br />
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>REACT</p>
                <p>BOOTSTRAP</p>
                <p>REACTSTRAP</p>

                <a
                  href="https://6096dd237d651bdeb888534d--elated-wozniak-156dda.netlify.app/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="camp-button">Check it out</button>
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              lg={8}
              xl={6}
              className="text-center pl-0 pt-2 mb-5 pb-5"
            >
              <img className="camp-photo" src={camp} width="600px" alt="Logo" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
