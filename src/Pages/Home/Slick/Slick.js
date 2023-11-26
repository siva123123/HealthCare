import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

import './Slick.css';

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
};

const Slick = () => {
    return (
        <section className="slider-wrapper">
            <Container>
                <Row>
                    <Col md={12}>
                        <Slider {...settings}>
                            <div className="single-brand-logo">
                                <img src="https://d28c6jni2fmamz.cloudfront.net/star_health_logo_big_77cff254bd.svg" alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zOlI8ucU415OlFeqbarkg8WTc_ojKRHhQg&usqp=CAU" alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh4yQ0BUS6_TJJQlhtLZMEdppwq_F_3buiQ&usqp=CAU" alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhqRvbM0CVzE1P7lR_bE1k_-kekrPx6lJKg&usqp=CAU" alt="" />
                            </div>
                           
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Slick;