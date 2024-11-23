import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cards({ image, rating, title, paragraph, price }) {
  return (
    <Col sm={12} md={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden shadow-sm border-0 rounded-4">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={image}
            className="card-image"
            alt={title}
          />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="item-rating text-muted small">
              {Array(Math.round(rating)).fill("⭐").join("")}
            </div>
            <div className="wishlist">
              <i className="bi bi-heart fs-5 text-danger cursor-pointer"></i>
            </div>
          </div>
          <Card.Title className="text-truncate mb-2 fs-6">{title}</Card.Title>
          <Card.Text className="item-paragraph text-muted small mb-3">
            {paragraph}
          </Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <Card.Text className="item-price fw-bold mb-0">{`$${price.toFixed(
              2
            )}`}</Card.Text>
            <Link
              to="/"
              className="btn buy-now btn-sm d-flex align-items-center rounded-0"
            >
              <i className="bi bi-bag me-2"></i>
              Add to Cart
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
