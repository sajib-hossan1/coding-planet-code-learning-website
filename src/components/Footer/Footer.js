import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
// fontawesome files import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    // fontawesome icons
    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} />
    const liIcon = <FontAwesomeIcon icon={faLinkedin} />
    const twitIcon = <FontAwesomeIcon icon={faTwitterSquare} />
    const ytIcon = <FontAwesomeIcon icon={faYoutubeSquare} />
    return (
        <div className="footer">
            <Container className="footer-container">
                <Row>
                    <Col sm={12} lg={4} md={12} className="pe-3 mb-4">
                        <h3 className="mb-3">About Us</h3>
                        <hr />
                        <p>We are <span className="brand-name">Coding Planet</span></p>
                        <p>We are globally teaching students who wants to learn coding.</p>
                        <p>We are teaching more than <span className="brand-name">20+ more</span> coding languages. </p>
                    </Col>
                    <Col sm={12} lg={4} md={12} className="mb-4">
                        <h3 className="mb-3">Contact With Us</h3>
                        <hr />
                        <p>Phone : +231 12345678</p>
                        <p>E-mail : code.planet@gmail.com</p>
                        <address>Address : street 120/4, California, America</address>
                    </Col>
                    <Col sm={12} lg={4} md={12}>
                        <h3 className="mb-3">Follow Us On</h3>
                        <hr />
                        <div className="f-icon">
                            <p>
                                <a href="/#">{fbIcon} Facebook</a>
                            </p>
                            <p>
                                <a href="/#">{liIcon} LinkedIn</a></p>
                            <p>
                                <a href="/#">{twitIcon} Twitter</a>
                            </p>
                            <p>
                                <a href="/#">{ytIcon} Youtube</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;