import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/assets/about/pizza.png";
import Salad from "../../assets/assets/about/salad.png";
import Delivery from "../../assets/assets/about/delivery-bike.png";
import Bargers from "../../assets/assets/about/about-1.png";
import "../../styles/Explore.css";
export default function Explore() {
  const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`
    }
    // Add more mock data objects as needed
  ];
  return (
    <>
      <section className="explore-section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2 className="text-center explore-title">
                The burger tastes better when you eat it with your family
              </h2>
              <p>
                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus
              </p>
              <Link to="/" className="btn explore-now">
                Explore Full Menu
              </Link>
              <div className="d-flex justify-content-center">
                <img className="bargers-img" src={Bargers} alt="Bargers" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="explore-wrapper">
        <Container>
          <Row className="Justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col key={index} lg={4} className="mb-4 mb-md-0">
                <div className="explore-box text-center">
                  <div className="explore-icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
