import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import "../css/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact v2" />

          <div hidden>
            <input name="bot-field" />
          </div>

          <div>
            <label>
              First name
              <br />
              <input type="text" name="first-name" />
            </label>
          </div>

          <div>
            <label>
              Last name
              <br />
              <input type="text" name="last-name" />
            </label>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input id="email" type="email" name="email" />
          </div>

          <div>
            <label>
              Comments
              <br />
              <textarea name="comments"></textarea>
            </label>
          </div>

          <button type="submit">Submit The Results</button>
        </form>
      </div>
      // <div className="contact-wrapper">
      //   <Form
      //   name="contact"
      //   method="post"
      //   data-netlify="true"
      //   onSubmit="submit"
      //   data-netlify-honeypot="bot-field"
      //   style={{ padding: "60px", paddingTop: "170px" }}>
      //     <Row form>
      //       <Col md={6}>
      //         <FormGroup>
      //           <Label className="text-white" for="first-name ">
      //             First Name
      //           </Label>
      //           <Input
      //             type="first-name"
      //             name="first-name"
      //             id="first-name"
      //             placeholder="First-Name"
      //           />
      //         </FormGroup>
      //       </Col>
      //       <Col md={6}>
      //         <FormGroup>
      //           <Label className="text-white" for="last-name">
      //             Last Name
      //           </Label>
      //           <Input
      //             type="last-name"
      //             name="last-name"
      //             id="last-name"
      //             placeholder="Last Name"
      //           />
      //         </FormGroup>
      //       </Col>
      //     </Row>
      //     <FormGroup>
      //       <Label className="text-white" for="e-mail">
      //         E-mail Address
      //       </Label>
      //       <Input type="text" name="e-mail" id="e-mail" placeholder="E-mail" />
      //     </FormGroup>
      //     <FormGroup>
      //       <Input
      //         className="mt-5"
      //         type="textarea"
      //         name="comments"
      //         id="exampleText"
      //         placeholder="Write me a message..."
      //       />
      //     </FormGroup>

      //     <Button type="submit" className="contact-button" color="light">
      //       Send
      //     </Button>
      //   </Form>
      // </div>
    );
  }
}

export default Contact;
