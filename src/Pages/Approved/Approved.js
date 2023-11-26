import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Approved = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={12} lg={12} sm={12} className="text-center mb-5">
                    <div className="section-title mt-5">
                        <h1>Your Appointment has been</h1>
                    </div>
                </Col>
                <Col md={12} lg={12} sm={12}>
                    <img src="https://www.pngall.com/wp-content/uploads/2/Approved-PNG-Clipart.png" alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Approved;