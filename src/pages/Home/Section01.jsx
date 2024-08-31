import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import { Link } from 'react-router-dom'

const Section01 = () => {
  return (
    <>
    <section className="hero_section" id='about'>
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                    <div className='position-relative'>
                        <img src={Burger} className='img-fluid'  alt='Hero'/>

                        <div className='price_badge'>
                            <div className="badge_text">
                                <h4 className="h4_xs">Only</h4>
                                <h4 className="h3_lg">$6.99</h4>
                            </div>
                        </div>

                    </div>
                </Col>

                <Col lg={5}>
                    <div className="hero_text text-center">
                        <h1 className="text_white">
                            New Burger
                        </h1>
                        <h2 className="text_white">
                            With Onion
                        </h2>
                        <p className='text-white pt-2 pb-4'>
                        An onion burger features a juicy beef patty topped with caramelized onions, delivering a sweet and savory flavor. This delicious combination is often served on a toasted bun with classic condiments.
                        </p>
                        <Link to='/' className='btn order_now' >
                                Order Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section01
