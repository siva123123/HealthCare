import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={12} lg={12} sm={12}>
                    <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x1462-azn7c8sp.png" alt="" className="img-fluid" />
                </Col>
                <Col md={12} lg={12} sm={12} className="text-center mb-5">
                    <Link to="/"><button className="btn btn-warning p-3 fw-bold">Go Back</button></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;