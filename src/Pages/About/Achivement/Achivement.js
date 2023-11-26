import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Achivement.css';

const Achivement = () => {
    return (
        <section className="achivement-wrap text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Our Achievement</h1>
                        </div>
                        <div className="achivement-txt">
                            <p className="w-75">Care for semi or completely bed-ridden elderly patients. Zorgers assists and supports in almost all daily living activities (while on the bed) and hence prevents them for further health issues through continuous positioning, massage, exercises, and movements to the extent possible, to avoid accidental deterioration in health.</p>
                            <div className="more-tool">
                            <Link to="/login"><button  className="theme-btn btn-fill">Appoinment</button></Link>
                            <a href="https://youtu.be/6ajmuRg2o3Q?si=rxrhHp_x1ZM2ksma" className="watchBtn"><button className="theme-btn btn-unfill"><FontAwesomeIcon className="play-btn" icon={faPlayCircle} /><span>Watch Vedio</span></button></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <Row className="achivement-funfact text-white">
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>22 +</span>
                                    <p>Patients</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>75 +</span>
                                    <p>Consultants</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>25 +</span>
                                    <p>Awards</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>28 +</span>
                                    <p>Branch</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achivement;