import React from "react";
import { Button } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79455.96685212835!2d-0.147235!3d51.513235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052c9bfbbad7%3A0x17eaeda9b0a663b0!2s6%20S%20Molton%20St%2C%20London%20W1K%205QF%2C%20UK!5e0!3m2!1sen!2sus!4v1634917948225!5m2!1sen!2sus"
          width="935"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}
      </div>

      <div className="contact__bottom">
        <div className="contact__bottom1">
          <p>Our Location</p>
          <hr />
          <p>
            international house,
            <br /> 6 Molton Street,
            <br /> London, England W1K5QF
          </p>
          <br />
          <p>Email</p>
          <hr />
          <p>info@erampartners.com</p>
        </div>

        <div className="contact__bottom2">
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
          ></input>
          <input
            type="text"
            placeholder="Company Name"
            className="contact__input"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="contact__input"
          ></input>
          <input
            type="text"
            placeholder="Message"
            className="contact__input"
          ></input>
          <Button variant="light" size="lg">
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
