import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Section07 = () => {
  return (
    <>
      <section className="contact_section">
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                <h4>We Guarantee</h4>
                <h2>30 Minutes Delivery</h2>
                <p>Enjoy piping hot, freshly prepared meals with our 30-Minute Delivery Guarantee! We promise to deliver your order right to your door within half an hour, ensuring you get your food fast without compromising on quality. If we’re late, your next delivery is on us!</p>
                <Link to='/' className='btn btn_red px-4 py-2 rounded-0'>
                Call : 999-888-777
                </Link>
                </Col>
            </Row>
            </Container>
      </section>
    </>
  )
}

export default Section07
