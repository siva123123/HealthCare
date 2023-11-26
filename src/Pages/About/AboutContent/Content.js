import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} className="text-center">
                        <div className="section-title">
                            <h1>Our Health Care Practice</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Geriatric Care revolves around assistance in daily living activities like bathing, toileting, feeding, walking etc. Home care plays an important role in promoting the mental health of an individual, so our caregivers engage in emotionally bonding activities like talking to them like a companion, or hearing them out, infused with a high level of patience and calmness. Since our elders need continuous caretaking and long-term assistance, we have developed a planned approach for home care for the elderly that promotes their independence and gives them a sense of dignity, while taking care of them in the comfort of their own homes. By evaluating your loved one's healthcare needs in consultation with your physician, we develop a plan that is best suited for them (routinely or on a periodic visits)</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;