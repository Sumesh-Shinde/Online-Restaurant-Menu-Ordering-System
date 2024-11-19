import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import aboutimg from '../Images/Banner1.jpg'

function About() {
    return(
        <div>
            <section>
                <Container>
                    <Row>
                        <Col>
                        <hr></hr>
                            <h6>Home / About</h6>
                        </Col>
                    </Row>
                    <Row className="text-center py-4">
                        <h2 style={{color:'red',textDecoration:'underline',fontFamily:'fantacy'}}>
                            WHO ARE WE
                        </h2>
                        
                    </Row>
                    <hr></hr>
                    <Row>
                        <p>A great-tasting Indian meal is all about balancing spices, sauces, and flavors. The moment you dig into a curry-filled dish, it should create an explosion of tastes, sending waves of satisfaction to your senses. If you’re wondering which delivery food stores can offer this ultimate culinary experience, the answer is your nearby Indian restaurant! Traditional offerings of Indian cuisine cover everything from biryanis to curries, but if you're craving something more personalized, go ahead and request a customized thali, along with appetizers, tangy chutneys, and delectable desserts, when you order food online from your favorite Indian restaurant.

You can choose between different breads like naan, roti, paratha, or rice varieties like basmati, jeera, or pulao. Pair your meal with a variety of vegetarian and non-vegetarian curries, adding your favorite sides like dal or raita! Once the Indian restaurant in Pune receives your order, they will prepare your meal exactly to your liking, and the food delivery partner will bring it right to your doorstep or any specified location. You can choose your ideal combination of rice, breads, and curries to create a meal that satisfies every craving!

Indian restaurants remain unbeatable as one of the best delivery options in India. With a seamless home delivery service, you can track your order from the moment it’s placed until it arrives at your door, keeping you informed every step of the way. Looking for food delivery in Ahmedabad that serves authentic dishes late into the night? Save your favorite Indian restaurant on your speed dial!</p>
                    </Row>
                    <Row>
                        <img src={aboutimg} height={400} style={{paddingBottom:'20px'}}></img>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default About