import React from "react";
import '../styles/menu.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import biryani from '../Images/BIRYANI.jpeg'
import buttterC from '../Images/BUTTTER CH.jpeg'
import paner from '../Images/PANEER BM.jpg'
function ChineseCuisine()
{
    return (
        <div>
            
            <section className="menu">
                <Container>
                    <Row className="py-4">
                        <h6>MENU / ChineseCuisine</h6>
                    </Row>
                    <Row className="text-center py-3">
                        <Col>
                            <h1 style={{ color: 'red', fontFamily: 'fantasy' }}>
                                OUR MENU(chinease)
                            </h1>
                        </Col>
                    </Row>
                    <Row className="text-center py-4">
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Butter Chicken</h3>
                                <img src={buttterC} height={150} width={200} alt="Chinese Cuisine" />
                                <p>A creamy, tomato-based curry made with marinated chicken.</p>
                                <Button variant="primary" style={{ width: '50%' }} >
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Paneer Butter Masala</h3>
                                <img src={biryani} height={150} width={200} alt="Indian Cuisine" />
                                <p>A vegetarian dish made with paneer (Indian cottage cheese) cooked in a rich tomato-based gravy.</p>
                                <Button variant="primary" style={{ width: '50%' }} >
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                       
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Biryani</h3>
                                <img src={paner} height={150} width={200} alt="Continental Cuisine" />
                                <p>A fragrant rice dish with aromatic spices and chicken, mutton, or vegetables.
                                </p>
                                <Button variant="primary" style={{ width: '50%' }} >
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </div>
    );
};
export default ChineseCuisine