import React, { useState } from "react";
import '../styles/menu.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import biryani from '../Images/BIRYANI.jpeg';
import buttterC from '../Images/BUTTTER CH.jpeg';
import paner from '../Images/PANEER BM.jpg';
import noodle from '../Images/hakka.jpeg';
import machu from '../Images/manchuriyan.jpeg';
import fried from '../Images/friedRice.jpeg';
import sikh from '../Images/sikh.jpeg';
import shah from '../Images/SHAHI.jpeg';
import salad from '../Images/salad.jpeg';
import grill from '../Images/grilled chicken.jpeg';
import pasta from '../Images/pasta.jpg';
import dosa from '../Images/dosa.jpeg';
import idli from '../Images/idli.jpeg';
import vada from '../Images/vada.jpeg';

function IndianCuisine() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Function to add item to the cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    // Function to remove item from the cart
    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    // Function to clear the cart after checkout
    const handleCheckout = () => {
        alert("Proceed to Checkout!");
        setCart([]); // Clear the cart
    };

    // Toggle cart visibility
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div>
            {/* Cart button at the top */}
            <Button variant="info" className="cart-toggle-btn" onClick={toggleCart}>
                Cart ({cart.length})
            </Button>

            {/* Sliding cart section */}
            <div className={`cart ${isCartOpen ? "open" : ""}`}>
                <Container>
                    <Row className="cart-header py-3">
                        <Col>
                            <h2>Your Order Cart</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {cart.length === 0 ? (
                                <p>Your cart is empty</p>
                            ) : (
                                <ul className="cart-list">
                                    {cart.map((item, index) => (
                                        <li key={index} className="cart-item">
                                            {item}
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeFromCart(index)}
                                            >
                                                Remove
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Col>
                    </Row>
                    {cart.length > 0 && (
                        <Row className="py-3">
                            <Col>
                                <Button variant="success" className="checkout-btn" onClick={handleCheckout}>
                                    Checkout
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>

            {/* Indian Cuisine Section */}
            <section className="menu">
                <Container>
                    <Row className="py-4">
                        <h6>MENU / IndianCuisine</h6>
                    </Row>
                    <Row className="text-center py-3">
                        <Col>
                            <h1 style={{ color: 'red', fontFamily: 'fantasy' }}>
                                OUR MENU (Indian)
                            </h1>
                        </Col>
                    </Row>
                    <Row className="text-center py-4">
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Butter Chicken</h3>
                                <img src={buttterC} height={150} width={200} alt="Butter Chicken" />
                                <p>A creamy, tomato-based curry made with marinated chicken.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Butter Chicken')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Paneer Butter Masala</h3>
                                <img src={paner} height={150} width={200} alt="Paneer Butter Masala" />
                                <p>A vegetarian dish made with paneer (Indian cottage cheese) cooked in a rich tomato-based gravy.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Paneer Butter Masala')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Biryani</h3>
                                <img src={biryani} height={150} width={200} alt="Biryani" />
                                <p>A fragrant rice dish with aromatic spices and chicken, mutton, or vegetables.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Biryani')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Chinese Cuisine Section */}
            <section className="menu">
                <Container>
                    <Row className="text-center py-3">
                        <Col>
                            <h1 style={{ color: 'red', fontFamily: 'fantasy' }}>
                                OUR MENU (Chinese Cuisine (Indian-Chinese Fusion))
                            </h1>
                        </Col>
                    </Row>
                    <Row className="text-center py-4">
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Hakka Noodles</h3>
                                <img src={noodle} height={150} width={200} alt="Hakka Noodles" />
                                <p> Stir-fried noodles with vegetables and meat, seasoned with soy sauce and Indian spices.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Hakka Noodles')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Manchurian</h3>
                                <img src={machu} height={150} width={200} alt="Manchurian" />
                                <p>Fried vegetable or chicken balls served in a spicy, tangy gravy</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Manchurian')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Szechuan Fried Rice</h3>
                                <img src={fried} height={150} width={200} alt="Szechuan Fried Rice" />
                                <p>Spicy fried rice flavored with Szechuan sauce and vegetables or meat.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Szechuan Fried Rice')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mughlai Cuisine Section */}
            <section className="menu">
                <Container>
                    <Row className="text-center py-3">
                        <Col>
                            <h1 style={{ color: 'red', fontFamily: 'fantasy' }}>
                                OUR MENU (Mughlai Cuisine)
                            </h1>
                        </Col>
                    </Row>
                    <Row className="text-center py-4">
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Mughlai Biryani</h3>
                                <img src={biryani} height={150} width={200} alt="Mughlai Biryani" />
                                <p> A luxurious rice dish cooked with marinated meat (usually mutton or chicken) and flavored with saffron and spices.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Mughlai Biryani')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Seekh Kebab</h3>
                                <img src={sikh} height={150} width={200} alt="Seekh Kebab" />
                                <p>Minced meat, spiced, and grilled on skewers over an open flame.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Seekh Kebab')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Shahi Tukda</h3>
                                <img src={shah} height={150} width={200} alt="Shahi Tukda" />
                                <p> A royal dessert made of fried bread soaked in condensed milk, topped with nuts and saffron.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Shahi Tukda')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Other Dishes Section */}
            <section className="menu">
                <Container>
                    <Row className="text-center py-3">
                        <Col>
                            <h1 style={{ color: 'red', fontFamily: 'fantasy' }}>
                                OUR MENU (Other Dishes)
                            </h1>
                        </Col>
                    </Row>
                    <Row className="text-center py-4">
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Salad</h3>
                                <img src={salad} height={150} width={200} alt="Salad" />
                                <p> A healthy mix of fresh vegetables like lettuce, cucumber, and tomatoes.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Salad')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Grilled Chicken</h3>
                                <img src={grill} height={150} width={200} alt="Grilled Chicken" />
                                <p> A juicy chicken breast grilled to perfection and seasoned with herbs.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Grilled Chicken')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Pasta</h3>
                                <img src={pasta} height={150} width={200} alt="Pasta" />
                                <p> Italian-style pasta cooked with a rich, creamy sauce.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Pasta')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* South Indian Cuisine Section */}
            <section className="menu">
                <Container>
                    <Row className="text-center py-3">
                        <Col>
                            <h1 style={{ color: 'red', fontFamily: 'fantasy' }}>
                                OUR MENU (South Indian Cuisine)
                            </h1>
                        </Col>
                    </Row>
                    <Row className="text-center py-4">
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Dosa</h3>
                                <img src={dosa} height={150} width={200} alt="Dosa" />
                                <p> A crispy, thin pancake made from fermented rice and lentil batter, served with chutneys and sambar.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Dosa')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Idli</h3>
                                <img src={idli} height={150} width={200} alt="Idli" />
                                <p> Steamed, soft rice cakes made from fermented rice and lentil batter, served with chutney and sambar.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Idli')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} className="menu-card">
                            <div>
                                <h3>Vada</h3>
                                <img src={vada} height={150} width={200} alt="Vada" />
                                <p> Crispy, savory doughnuts made from spiced lentil batter, served with chutneys.</p>
                                <Button variant="primary" style={{ width: '50%' }} onClick={() => addToCart('Vada')}>
                                    ORDER THIS ITEM
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default IndianCuisine;
