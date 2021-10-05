import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './OurServices.css'

const OurServices = () => {
    return (
        <div className="services-container">
            <h2 className="m-4 mt-5 services-title">Our Services</h2>
            <Row className="p-0 m-0">
                <Col sm={12} lg={3} md={6} className="mb-4">
                    <div className="our-services-card">
                        <div className="image-div text-center">
                            <img src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"  alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Why Chose Us?</h2>
                            <p>We have professional coder whom teach you the code effectively.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg={3} md={6} className="mb-4">
                    <div className="our-services-card">
                        <div className="image-div text-center">
                            <img src="https://media.istockphoto.com/photos/office-room-of-many-desktop-computers-picture-id1003228586?b=1&k=20&m=1003228586&s=170667a&w=0&h=InhUVsTdBmPNSurdj-y8nWo4BgGNW6nQW5o20cWcDIA=" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Learning Environment</h2>
                            <p>A good and healthy class room is important for learning place.We also ensure that our class environment is clean and healthy.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg={3} md={6} className="mb-4">
                    <div className="our-services-card">
                        <div className="image-div text-center">
                            <img src="https://images.unsplash.com/photo-1608600712992-03e5325d94c8?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Online Class</h2>
                            <p>Are you far away? Then you have a opportunity to enroll and do your class by sitting in your home.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg={3} md={6} className="mb-4">
                    <div className="our-services-card">
                        <div className="image-div text-center">
                            <img src="https://blog.devmountain.com/hs-fs/hubfs/Imported_Blog_Media/jlKVKoIlyAU0ptV2dOUQ4vBL-7ogeRJHi-PrzS_0COvLN_fP3e9zp5yB6OhUm3Cok5ZEBzkprU0FHVel2aO-2l87qaNJ5PORLGJv_B3_XARjxcZ8NB86b1mvdLskxTeeyofnMb5f-1.png?width=600&name=jlKVKoIlyAU0ptV2dOUQ4vBL-7ogeRJHi-PrzS_0COvLN_fP3e9zp5yB6OhUm3Cok5ZEBzkprU0FHVel2aO-2l87qaNJ5PORLGJv_B3_XARjxcZ8NB86b1mvdLskxTeeyofnMb5f-1.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>20+ Programming Languages</h2>
                            <p>We will tech you 20+ programming languages which is popular in the planet right now.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default OurServices;