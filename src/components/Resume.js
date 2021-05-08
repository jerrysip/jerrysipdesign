import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import me from "../images/me2.jpg";
import "../css/Resume.css";
import { Container, Col, Row } from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <div className="res-wrap">
        {/* <h1 className="aboutheader">About Me</h1>
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
        </div> */}
        <div className="black"></div>
        <div className="resume-wrapper">
          <Container fluid className=" pt-5 ml-3 pl-0 pl-lg-5 ml-lg-5">
            <Row className="mt-5 pt-5">
              <Col xs={12} lg={7} className=" text-center text-white">
                <h1 className="about-me">About Me</h1>
                <div className="about-me mt-3">
                  I am a graduate from NuCamp’s Full-Stack Javascript Bootcamp,
                  and currently attending a University to obtain a Bachelor's
                  degree in Computer Science. Prior to programming, I was a
                  hairdresser for 12 years. I believe that my career as a
                  hairdresser reflects my drive and passion for anything that I
                  do. <br /> <br /> I began my career as a salon receptionist,
                  working my way up to becoming a top stylist. I have had the
                  honor to work for fashion weeks in cities like Paris, Bangkok,
                  and New York City. I’ve worked with top names in the industry
                  such as Annie Leibovitz, Karlie Kloss, and Anna Wintour. I’ve
                  been able to showcase my work in magazines such as Vogue and
                  Glamour. <br /> <br /> With the amazing opportunities I
                  received as a stylist, I knew that it was time to embark on a
                  new journey. This is just the beginning, but I am ready to
                  learn and dedicate my time to programming. I hope to have a
                  similar experience in the tech world as I did in hair!
                </div>
                <a
                  href="https://onedrive.live.com/?cid=16B5F7A0F7688699&id=16B5F7A0F7688699%211905&parId=root&o=OneUp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="about-button mt-5">Resume</button>
                </a>
              </Col>
              <Col
                xs={12}
                lg={5}
                className="text-center mt-5 pt-2 mt-lg-0 mb-5 mb-sm-0"
              >
                <div className="about-photo">
                  <img src={me} height="500px" alt="me"></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Resume;
