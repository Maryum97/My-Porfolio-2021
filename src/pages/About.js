import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <Header
                    title="About Me"
                />
                <Container>
                    <Row>
                        <Col xs='3'></Col>
                        <Col xs='9'>
                            <h2>Introduction</h2>
                            <p>
                                I, Maryum Bokhari, am a student currently working on a venture to become a Full-Stack Web Developer. I am a hardworking and determined individual, working my way to set a successful career in engineering and web development.
                                This website provides details about my life, hobbies and ambitions that you may find interesting and inspiring. For more information about my lifestyle and background, have a look at the images in the <a href="/portfolio">Porfolio</a> section.<br></br>
                                Originally from Pakistan, I have achieved my basic education from my hometown, Lahore, and then moved to England in 2016 to continue my pursuit in becoming an engineer, from Aston University. In 2020, I joined a Bootcamp at University of Birmingham, to learn and become an expert at coding.<br></br>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default About;