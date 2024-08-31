import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PromotionImage from '../../assets/promotion/pro.png'

const Section04 = () => {
    return (
        <>
            <section className='promotion_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center mb-5 mb-lg-0'>
                            <img src={PromotionImage}  className='img-fluid' alt="Promotion" />
                        </Col>

                        <Col lg={6} className='px-5'>
                           <h2>Nothing brings people together link a good burger</h2>
                           <p>It’s the ultimate comfort food that sparks joy and conversation. Our Crazy Burger is crafted to perfection, combining premium beef, crispy bacon, and caramelized onions to create a taste that unites. Whether you’re dining with friends or family, this burger is sure to be the centerpiece of your meal. Savor each bite, and let the good times roll!</p>
                           <ul>
                            <li>
                                <p>A good burger sparks shared joy and creates memorable dining experiences.</p>
                            </li>
                            <li>
                                <p>It bridges diverse tastes, making it a universal favorite.</p>
                            </li>
                            <li>
                                <p>Burgers offer endless customization, catering to everyone's cravings.</p>
                            </li>
                           </ul>
                        </Col>
                    </Row>
                </Container>

            </section>


            {/* BG Parallax Scroll */}
            <section className="bg_parallax_scroll"></section>

        </>
    )
}

export default Section04
