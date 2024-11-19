import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div>
            <section className="footer">
                <Container>
                    <Row className='text-center py-5'>
                        <Col sm={3}>
                            <h4>MENU</h4>
                            <ul>
                                <li><a href="#">Thali Platter Menu</a></li>
                                <li><a href="#">Tandoori Menu</a></li>
                                <li><a href="#">South Indian Menu</a></li>
                                <li><a href="#">Street Food Menu (Chaat and Snacks)</a></li>
                                <li><a href="#"> Biryani and Rice Dishes Menu</a></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>PIZZA RESTAURANT</h4>
                            <ul>
                                <li><a href="#"> Indian Cuisine</a></li>
                                <li><a href="#">Chinese Cuisine Indian-Chinese Fusion</a></li>
                                <li><a href="#">Mughlai Cuisine</a></li>
                                <li><a href="#">Continental Cuisine</a></li>
                                <li><a href="#">South Indian Cuisine</a></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>ABOUT</h4>
                            <ul>
                                <li><a href="#">Gift Card</a></li>
                                <li><a href="#">Card Balance Enquiry</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Virtual Pizza Party</a></li>
                                <li><a href="#">E-Gift</a></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>SOCIAL MEDIA</h4>
                            <ul>
                                <a href="#"><FacebookIcon /></a>
                                <a href="#"><YouTubeIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <hr style={{ color: 'black', border: '1px solid white' }} />
                <h6 style={{ color: 'black', textAlign: 'center' }}>
                    Copyright Reserved @2024 Sumesh
                </h6>
            </section>
        </div>
    );
}

export default Footer;
