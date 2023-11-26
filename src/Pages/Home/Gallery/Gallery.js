import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Gallery.css';


const Gallery = () => {
    return (
        <section className="gallery-wrapper text-white">
            <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <div className="section-title">
                            <h1>Our Gallery</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/news/images/2020/8/10/assisted-living-c.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouhU0JSumUEIbJ_T523QaA8P2RwazplzVTw&usqp=CAU" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src="https://c1.wallpaperflare.com/preview/382/764/874/hospice-caring-nursing-care.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={8} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src="https://media.istockphoto.com/id/1435013460/photo/mid-adult-nurse-helping-senior-woman-dress-shirt-in-bedroom-at-nursing-home.webp?b=1&s=170667a&w=0&k=20&c=xFh7R4xtHlwi3KTVXfCh_ttiMpqWmdmOQFqWJSn_Y6k=" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src="https://media.istockphoto.com/id/1316202210/photo/happy-adult-woman-visiting-her-elderly-mother-at-home.jpg?s=612x612&w=0&k=20&c=Dv0VFtkztAtnCf53cEagu6ry1hoiHHKPzQZqCEYVicY=" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Gallery;