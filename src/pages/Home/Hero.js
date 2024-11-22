import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/assets/hero/hero-2.png";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";
export default function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} alt="" className="img-fluid" />
              <div className="price-badge">
                <div className="badge-text">
                  <h4 className="h4-xs">only</h4>
                  <h4 className="h3-lg">$9.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} className="d-flex  align-items-center">
            <div className="hero-text text-center">
              <h1 className="text-white hero-title1">New Burger</h1>
              <h2 className="text-white hero-title2">With Onion</h2>
              <p className="text-white pt-2 pb-4">
                Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat
              </p>
              <Link to="/" className="btn order-now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
