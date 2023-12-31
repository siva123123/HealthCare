import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHi0dQOI97DHhE-a5EsN5ZxtojDZ6tmmsCw&usqp=CAU" alt="expertDentist" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Experienced Consultants</h2>
                            <p>Smiling comes naturally to Dr. Selvarani, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
                            <p>Dr. Athilingam believes in providing her patients with more than just world class care. He also helps patients recognize the vital connection between health and whole body health. A graduate of the University of California’s School , Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the world for future.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;