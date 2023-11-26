import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Safety.css';

const Safety = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} className="text-center">
                        <div className="section-title">
                            <h1>Safety First</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">We are a registed corporate company with recongnitions from Govt of Tamil Nadu and Govt of India for Healthcare Startup. Being into healthcare from last 9 years, client satisfaction is the key area where we all work together to provide you quality and hassle free services..</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img">
                                <a href="https://youtu.be/DRomQhvuFWA?si=8XU3LHkViWDyM2kX"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>Nutrition Tips for the Elderly - HealthXChange</h5>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img img2">
                                <a href="https://youtu.be/-_VhU5rqyko?si=TCojmW1i570tuol3"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>7 Fitness Habits That Will Change Your Life | Health & Fitness Habits Hacks | Daily Healthy Tips</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Safety;