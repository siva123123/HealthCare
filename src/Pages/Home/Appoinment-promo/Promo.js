import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Promo.css';

const Promo = () => {
    return (
        <section className="promo-wrapper">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} sm={12} lg={6}>
                        <div className="promo-content text-white text-start">
                            <h1 className="mt-sm-req">Request your appointment and start your smile makeover!</h1>
                            <Link to="/login"><button href=".#" className="theme-btn btn-fill mt-4">Request Appointment</button></Link>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={6}>
                        <div className="promo-banner">
                            <img src="https://c1.wallpaperflare.com/preview/980/833/229/hospice-caring-elderly-old.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Promo;