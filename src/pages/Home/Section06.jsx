import React from 'react'
import { Container, Row ,Carousel} from 'react-bootstrap'
import User1 from '../../assets/blog/review-author-1.jpg'
import User2 from '../../assets/blog/review-author-2.jpg'
import User3 from '../../assets/blog/review-author-3.jpg'
import User4 from '../../assets/blog/review-author-5.jpg'

const Section06 = () => {
    return (
        <>
            <section className="blog_section">
                <Container>
                    <Row>
                        <Carousel>
                            
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User1} alt="user-1" className='img-fluid' />
                                    </div>
                                    <p>
                                    This burger shop is a hidden gem! The burgers are juicy, flavorful, and always cooked to perfection. The toppings are fresh, and the buns are soft yet sturdy enough to hold everything together. The service is quick, and the atmosphere is cozy, making it the perfect spot for a satisfying meal.
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <h5>Come Again</h5>


                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User2} alt="user-2" className='img-fluid' />
                                    </div>
                                    <p>
                                    This burger shop is a hidden gem! The burgers are juicy, flavorful, and always cooked to perfection. The toppings are fresh, and the buns are soft yet sturdy enough to hold everything together. The service is quick, and the atmosphere is cozy, making it the perfect spot for a satisfying meal.
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <h5>Come Again</h5>


                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User3} alt="user-3" className='img-fluid' />
                                    </div>
                                    <p>
                                    This burger shop is a hidden gem! The burgers are juicy, flavorful, and always cooked to perfection. The toppings are fresh, and the buns are soft yet sturdy enough to hold everything together. The service is quick, and the atmosphere is cozy, making it the perfect spot for a satisfying meal.
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <h5>Come Again</h5>


                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User4} alt="user-4" className='img-fluid' />
                                    </div>
                                    <p>
                                    This burger shop is a hidden gem! The burgers are juicy, flavorful, and always cooked to perfection. The toppings are fresh, and the buns are soft yet sturdy enough to hold everything together. The service is quick, and the atmosphere is cozy, making it the perfect spot for a satisfying meal.
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <h5>Come Again</h5>


                                </Carousel.Caption>
                            </Carousel.Item>


                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section06
