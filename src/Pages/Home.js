import React from "react";
import '../styles/Home.css';
import { Container,Row,Col,Button,Card } from "react-bootstrap";
import img1 from '../Images/coupen1.jpeg'
import img2 from '../Images/coupen2.jpeg'
import menu from '../Images/menu.jpg'
import store from '../Images/store.jpg'
import { Store } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const goToMenu = () => {

        navigate('/menu');
    };
    return(
        <div>
        <section className="Banner">
            <Container>
                <Row className="py-4">
                    <Col>
                    <h1> ONLINE ORDERING</h1>
                    <h5>Yummy Food Delivered Fast and Fresh</h5>
                    <Button variant="success" onClick={goToMenu}>Order Online NOW.....</Button>
                    </Col>                    
                </Row>
            </Container>
        </section>
        <section className="coupons">
            <Row style={{color:'blue',fontFamily:'sans-serif',fontWeight:'bolder'}}>
                <h3>Coupons & Offers at our Restro</h3>
            </Row>
            <Container>
                <Row className="py-4">
                    <Col md={6}>
                        <img src={img1} style={{width:'500px'}}></img>
                    </Col>
                    <Col md={6}>
                        <img src={img2} style={{width:'500px'}}></img>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Row className="py-4">
                <Col >
                <h3 style={{color:'blue',fontFamily:'sans-serif',fontWeight:'bolder'}}>
                    Explore
                </h3>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={3}>
                    <Card style={{width:'16rem'}}>
                        <Card.Img variant="top" src={menu} style={{height:'150px'}}></Card.Img>
                        <Card.Body>
                            <Card.Title>OUR MENU</Card.Title>
                            <Card.Text>
                                Explore our range of delicious Food items...!
                            </Card.Text>
                            <Button variant="primary">
                                DISCOVER
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{width:'16rem'}}>
                        <Card.Img variant="top" src={store} style={{height:'150px'}}></Card.Img>
                        <Card.Body>
                            <Card.Title>OUR MENU</Card.Title>
                            <Card.Text>
                                Explore our range of delicious Food items...!
                            </Card.Text>
                            <Button variant="primary">
                                DISCOVER
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{width:'16rem'}}>
                        <Card.Img variant="top" src={menu} style={{height:'150px'}}></Card.Img>
                        <Card.Body>
                            <Card.Title>OUR MENU</Card.Title>
                            <Card.Text>
                                Explore our range of delicious Food items...!
                            </Card.Text>
                            <Button variant="primary">
                                DISCOVER
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{width:'16rem'}}>
                        <Card.Img variant="top" src={store} style={{height:'150px'}}></Card.Img>
                        <Card.Body>
                            <Card.Title>OUR MENU</Card.Title>
                            <Card.Text>
                                Explore our range of delicious Food items...!
                            </Card.Text>
                            <Button variant="primary">
                                DISCOVER
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
        </div>

    )
}
export default Home