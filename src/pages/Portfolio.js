import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image1 from '../Assets/Portfolio/LahoreOnAMap.png';
import Image2 from '../Assets/Portfolio/LahoreShahiQila.JPG';
import Image3 from '../Assets/Portfolio/CJM.JPG';
import Image4 from '../Assets/Portfolio/AstonUniversity.JPG';
import Image5 from '../Assets/Portfolio/UOB.JPG';

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
                        <Col><img src={Image1} className='img-fluid' alt='LahoreOnAMap'></img></Col>
                        <Col><img src={Image2} className='img-fluid' alt='LahoreShahiQila'></img></Col>
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
                    <Row >
                        <img src={Image3} className='img-fluid' alt='CJM'></img>
                        <p>
                            In the loving memory of my school, Convent of Jesus and Mary, Lahore, where I spent most of my
                            formative years and graduated with an O levels, under the influence of its incredible teaching staff and
                            crew.
                        </p>
                    </Row>
                    <Row>
                        <h2>Here in the UK...</h2>
                        <Col><img src={Image4} className='img-fluid' alt='AstonUniversity.JPG'></img></Col>
                        <Col><img src={Image5} className='img-fluid' alt='UOB.JPG'></img></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Aston University, right here in Birmingham, UK, where I had the honour of studying and
                                graduating with a masters degree in Chemical Engineering.
                            </p>
                        </Col>
                        <Col>
                            <p>
                                Of course, the very well-known University of Birmingham, where I am currently taking advantage
                                of the privilege of studying as an upcoming programmer
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <h2>My hobbies and interests include...</h2>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio;