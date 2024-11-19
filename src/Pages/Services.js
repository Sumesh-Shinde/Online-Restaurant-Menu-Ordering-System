import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import aboutimg from '../Images/Banner1.jpg'
function Services() {
   return(
    <div>
    <section>
        <Container>
            <Row>
                <Col>
                <hr></hr>
                    <h6>Home / Services</h6>
                </Col>
            </Row>
            <Row className="text-center py-4">
                <h2 style={{color:'red',textDecoration:'underline',fontFamily:'fantacy'}}>
                    OUR SERVICES
                </h2>
                
            </Row>
            <hr></hr>
            <Row>
                <p>A great dining experience at an Indian restaurant is all about the perfect blend of spices, textures, and flavors. The moment you bite into a delicately spiced curry or a fluffy naan, it should ignite your taste buds, sending waves of satisfaction to your senses. If you're looking for a restaurant that can give you this ultimate culinary experience, the answer lies in a local Indian restaurant! Traditional offerings like butter chicken, biryani, and paneer dishes are always available, but if you're in the mood for something unique, feel free to request a customized dish paired with Indian breads, tangy chutneys, and delicious desserts. When you order food online from an Indian restaurant that delivers near your location, you're in for a treat.

You can choose from a variety of bread like garlic naan, tandoori roti, or butter kulcha. Top off your meal with your favorite vegetarian or non-vegetarian dishes, and even add extra rice or sides! Upon receiving your order, the restaurant in Pune will prepare the dishes exactly to your preference, and their home delivery partner will ensure it reaches your doorstep or any location you specify. You can track the entire process online, from the moment the order is placed until the delivery is made, so you stay informed at every stage. Looking for food delivery in Ahmedabad for a late-night craving? Save your favorite Indian restaurant on your speed dial!</p>
            </Row>
            <Row>
                <img src={aboutimg} height={400} style={{paddingBottom:'20px'}}></img>
            </Row>
        </Container>
    </section>
</div>
   )
}
export default Services