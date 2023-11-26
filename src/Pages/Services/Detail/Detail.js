import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Detail.css';

const Detail = () => {
    return (
        <>
            <section className="healing p-5">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold">Health Insurance Policy</h2>
                                <p>If you are above 60, it is wise if you don’t take too many chances with your health and also get yourself senior citizens' health insurance that covers you for medical emergencies in times of need. Understanding that with low immunity and susceptibility to various illnesses, having a customised plan becomes necessary. Given the high cost of medical procedures and treatment, dealing with them can be financially burdensome. HDFC ERGO provides health insurance policies designed for senior citizens, covering pre-existing medical conditions, hospitalisation costs, critical illnesses, and much more. Additionally, with an extensive 12,000+ cashless network across India, HDFC ERGO aims to ensure senior citizens have a worry-free and tranquil retirement.</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYVNTWOVQPTtieomeWU1NuN-89tDE1JR5HA&usqp=CAU" alt="expertDentist" width="90%" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="healing p-5 footer-bg">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zyDo_Xw_wcsUto2DhGHTHfit5ZN5QGPseg&usqp=CAU" alt="expertDentist" width="90%" className="img-fluid pt-xs-5" />
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold text-white">Old Age Care</h2>
                                <p className="text-white">Basic Healthcare-cum-Companionship by our staff can be availed during Day or Night or on stay-at-home / in-house / 24 hours basis, to take good care of health including care of hygiene, diet, medication, physical assistance in movements with walker / wheelchair, light massage.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Detail;