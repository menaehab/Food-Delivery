import React from "react";
import "../../styles/Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <section className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius luctus neque
              magna
            </p>
            <Link className="btn btn-red px-4 py-2 rounded-0" to="/">
              Call: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
