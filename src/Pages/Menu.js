// src/Menu.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../styles/menu.css'
import vegPizza from '../Images/VegPizza.jpg'
import indian from '../Images/indian.jpeg'
import chinese from '../Images/chinease.jpeg'
import conti from '../Images/conti.jpeg'
import south from '../Images/south.jpeg'
import mughal from '../Images/mughal.jpg'

function Menu() {
    const navigate = useNavigate();

    const goToIndianCuisine = () => {

        navigate('/indian-cuisine');
    };

    const goToChineseCuisine = () => {
        navigate('/chinese');  // Corrected path
    };
    

    const goToMughlaiCuisine = () => {
        navigate('/mughlai-cuisine');
    };

    const goToContinentalCuisine = () => {
        navigate('/continental-cuisine');
    };

    const goToSouthIndianCuisine = () => {
        navigate('/south-indian-cuisine');
    };

    return (
        <div>
            <section className="menu">
                <Container>
                    <Row className="py-4">
                        <h6>HOME / MENU</h6>
                    </Row>
                    <Row className="text-center py-3">
                        <Col>
                            <h1 style={{ color: 'red', fontFamily: 'fantasy' }}>
                                OUR MENU
                            </h1>
                        </Col>
                    </Row>
                    <Row className="text-center py-4">
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Chinese Cuisine (Indian-Chinese Fusion)</h3>
                                <img src={chinese} height={150} width={200} alt="Chinese Cuisine" />
                                <p>Indian-Chinese food is a unique fusion of Chinese techniques with Indian spices, loved for its bold, spicy flavors.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={goToIndianCuisine}>
                                    VIEW ALL
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Indian Cuisine</h3>
                                <img src={indian} height={150} width={200} alt="Indian Cuisine" />
                                <p>Known for its diverse range of flavors and spices, Indian cuisine includes dishes from various regions, such as North Indian curries, South Indian rice-based dishes, and street foods.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={goToIndianCuisine}>
                                    VIEW ALL
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Mughlai Cuisine</h3>
                                <img src={mughal} height={150} width={200} alt="Mughlai Cuisine" />
                                <p>A rich and flavorful cuisine that originated from the Mughal Empire, known for its use of aromatic spices, nuts, and yogurt.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={goToIndianCuisine}>
                                    VIEW ALL
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Continental Cuisine</h3>
                                <img src={conti} height={150} width={200} alt="Continental Cuisine" />
                                <p>Western-style cuisine adapted to suit Indian tastes, commonly served in Indian restaurants and cafes.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={goToIndianCuisine}>
                                    VIEW ALL
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>South Indian Cuisine</h3>
                                <img src={south} height={150} width={200} alt="South Indian Cuisine" />
                                <p>Focused on rice, lentils, and coconut, this cuisine is known for its light, flavorful, and spicy dishes.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={goToIndianCuisine}>
                                    VIEW ALL
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Menu;
