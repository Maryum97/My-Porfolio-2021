import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Portfolio() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <Header
                    title="My Portfolio"
                />
                <Container>
                    <Row>
                        <h2>Back in Pakistan...</h2>
                        <Col><img src='../../Assets/Portfolio/LahoreOnAMap.JPG'></img></Col>
                        <Col><img src='../../Assets/Portfolio/.JPG'></img></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                See that pink star? That's Lahore, my hometown, on a map. It's big, highly advanced and
                                extremely attractive for people to find greater opportunities, throughout Punjab, Pakistan. I was very
                                lucky to be raised here :).
                            </p>
                        </Col>
                        <Col>
                            <p>
                                Just thought I'd share an image of the very beautiful and famous Shahi Qila, or the Lahore Fort;
                                an important landmark and tourist attracttion of my city.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio;