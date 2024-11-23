import React from "react";
import "../../styles/Testimonials.css";
import { Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import User1 from "../../assets/assets/blog/review-author-1.jpg";
import User2 from "../../assets/assets/blog/review-author-2.jpg";
import User3 from "../../assets/assets/blog/review-author-3.jpg";
import User4 from "../../assets/assets/blog/review-author-5.jpg";
export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <Container>
        <Row>
          <Swiper
            modules={(Navigation, Pagination, Autoplay)}
            spaceBetween={30}
            slidesPerView={1}
            lazy={true}
            loop={true}
          >
            <SwiperSlide className="text-center">
              <div className="testimonial-img">
                <img
                  src={User1}
                  alt="User-1"
                  className="img-fluid swiper-lazy"
                />
                <h4 className="testimonial-paragraph">
                  " Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque "
                </h4>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill star"></i>
                  <i className="bi bi-star-fill star"></i>
                  <i className="bi bi-star-fill star"></i>
                  <i className="bi bi-star-fill star"></i>
                  <i className="bi bi-star-fill star"></i>
                </div>
                <h2 className="testimonial-title">BY AMELIE NEWLOVE</h2>
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center">
              <div className="testimonial-img">
                <img
                  src={User2}
                  alt="User-1"
                  className="img-fluid swiper-lazy"
                />
                <h4 className="testimonial-paragraph">
                  " Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque "
                </h4>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h2 className="testimonial-title">BY AMELIE NEWLOVE</h2>
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center testimonial-item">
              <div className="testimonial-img">
                <img
                  src={User3}
                  alt="User-1"
                  className="img-fluid swiper-lazy"
                />
                <h4 className="testimonial-paragraph">
                  " Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque "
                </h4>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h2 className="testimonial-title">BY AMELIE NEWLOVE</h2>
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center">
              <div className="testimonial-img">
                <img
                  src={User4}
                  alt="User-1"
                  className="img-fluid swiper-lazy"
                />
                <h4 className="testimonial-paragraph">
                  " Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque "
                </h4>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h2 className="testimonial-title">BY AMELIE NEWLOVE</h2>
                <div className="swiper-lazy-preloader"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </section>
  );
}
