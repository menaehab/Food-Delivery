import React from "react";
import "../../styles/Shop.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import StoreIOS from "../../assets/assets/shop/appstore.png";
import StoreGoogle from "../../assets/assets/shop/googleplay.png";
import DownloadImage from "../../assets/assets/shop/e-shop.png";
import Brand1 from "../../assets/assets/brands/brand-11.png";
import Brand2 from "../../assets/assets/brands/brand-12.png";
import Brand3 from "../../assets/assets/brands/brand-13.png";
import Brand4 from "../../assets/assets/brands/brand-14.png";
import Brand5 from "../../assets/assets/brands/brand-15.png";
import Brand6 from "../../assets/assets/brands/brand-16.png";
import Brand7 from "../../assets/assets/brands/brand-17.png";
import Brand8 from "../../assets/assets/brands/brand-18.png";

export default function Shop() {
  return (
    <>
      <section className="shop-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
              </p>
              <Link to="/">
                <img
                  src={StoreIOS}
                  alt="IOS"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={StoreGoogle}
                  alt="Android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={DownloadImage} alt="e-shop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brand-section">
        <Container>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            lazy={true}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 }
            }}
          >
            <SwiperSlide>
              <div className="brand-img">
                <img
                  src={Brand1}
                  alt="brand-1"
                  className="img-fluid swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-img">
                <img
                  src={Brand2}
                  alt="brand-2"
                  className="img-fluid swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-img">
                <img
                  src={Brand3}
                  alt="brand-3"
                  className="img-fluid swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-img">
                <img
                  src={Brand4}
                  alt="brand-4"
                  className="img-fluid swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-img">
                <img
                  src={Brand5}
                  alt="brand-5"
                  className="img-fluid swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-img">
                <img
                  src={Brand6}
                  alt="brand-6"
                  className="img-fluid swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-img">
                <img
                  src={Brand7}
                  alt="brand-7"
                  className="img-fluid swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-img">
                <img
                  src={Brand8}
                  alt="brand-8"
                  className="img-fluid swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </>
  );
}
