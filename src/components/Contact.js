import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "reactstrap";
import "../css/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <Container fluid className="text-center pl-0">
          <Row>
            <Col className="mt-5 pt-5">
              <h1 className="mt-5 pt-5 text-white">Contact Me</h1>
              <form name="contact-form" method="POST" data-netlify="true">
                <input
                  className="name-form"
                  type="hidden"
                  name="form-name"
                  value="contact-form"
                />

                <input
                  className="email-form"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <br />
                <textarea
                  className="message-form"
                  placeholder="Enter a message"
                  name="message"
                ></textarea>
                <br />
                <button
                  onClick={() => {
                    alert("thank you!");
                  }}
                  className="sub-btn"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </Col>
          </Row>
        </Container>
        {/* <Form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
          style={{ padding: "60px", paddingTop: "170px" }}
        >
          <input type="hidden" name="form-name" value="contact v2" />
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label className="text-white" for="first-name ">
                  First Name
                </Label>
                <Input
                  type="first-name"
                  name="first-name"
                  id="first-name"
                  placeholder="First-Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className="text-white" for="last-name">
                  Last Name
                </Label>
                <Input
                  type="last-name"
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label className="text-white" for="e-mail">
              E-mail Address
            </Label>
            <Input type="text" name="e-mail" id="e-mail" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input
              className="mt-5"
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Write me a message..."
            />
          </FormGroup>

          <Button type="submit" className="contact-button" color="light">
            Send
          </Button>
        </Form> */}
      </div>
    );
  }
}

export default Contact;
