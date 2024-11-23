import React from "react";
import "../../../styles/Footer.css";
import { Col, Container, Row } from "react-bootstrap";
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className="mb-4 mg-lg-0">
            <div className="text-center">
              <h5>Location</h5>
              <p>5505 Waterford District</p>
              <p>Dr, Miami, FL 33126</p>
              <p>United States</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mg-lg-0">
            <div className="text-center">
              <h5>Working Hours</h5>
              <p>Mon-Fri: 9:00AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: 12:00PM - 5:00PM</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mg-lg-0">
            <div className="text-center">
              <h5>Order Now</h5>
              <p>Quaerat neque purus ipsum</p>
              <p>999-888-7777</p>
              <p>Follow Us</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
