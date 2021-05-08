import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../css/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <form name="contact-form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact-form" />
          <input type="text" name="name" placeholder="Enter your name" />
          <input type="text" name="email" placeholder="Enter your email" />
          <textarea placeholder="Enter a message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
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
