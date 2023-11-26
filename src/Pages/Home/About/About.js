import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 1000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src="https://img.freepik.com/free-photo/happy-nurse-holding-elderly-man-hand-wheelchair-garden-nursing-home_554837-197.jpg" alt="not found"/>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1>Welcome to a Family</h1>
                                <p>Welcome to Siva Doctor represents everything going to Health Care necessary.Get personal care for seniors at your own home; right from the assistance with washing and dressing in the morning to aiding with toileting during the day. With our Domiciliary care services, let us help elders in maintaining their independence and the quality of life.</p>
                                <a href='/page/about'>About Us</a>
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>500</span>
                                    <span>+</span>
                                    <p>Happy Elders</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>88</span>
                                    <span>+</span>
                                    <p>Qualified Doctors</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>25</span>
                                    <span>+</span>
                                    <p>Years Experience</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <span>50</span>
                                    <span>+</span>
                                    <p>Health Care Awards</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;