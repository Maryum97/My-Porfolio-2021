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
                                This website provides details about my life, hobbies and ambitions that you may find interesting and inspiring. For more information about my lifestyle and background, have a look at the images in the <a href="/portfolio">Porfolio</a> section.<br></br><br></br>
                                Originally from Pakistan, I have achieved my basic education from my hometown, Lahore, and then moved to England in 2016 to continue my pursuit in becoming an engineer, from Aston University. In 2020, I joined a Bootcamp at University of Birmingham, to learn and become an expert at coding.<br></br><br></br>
                            </p>
                            <h2>My Achievements</h2>
                            <p>
                                My basic educational achievements include the following:
                            </p>
                            <ul>
                                <li>
                                    8 O level subjects, passed with 2 A*'s and 6 A's, from Convent of Jesus and Mary, Lahore, Pakistan, in 2014.
                                </li>
                                <li>
                                    3 A level subjects, passed with an A in Chemistry, and 2 B's in Mathematics and Biology, in 2016.
                                </li>
                                <li>
                                    A Chemical Enigeering Honours Degree from Aston University, in 2020.<br></br><br></br>
                                </li>
                            </ul>
                            <h2>My Programming Work</h2>
                            <p>
                                Being a student at University of Birmingham, as mentioned earlier, I learned how to code and create web applications, as a part of the Full-Stack Web Development course. Some such projects that I submitted as a
                                part of the assessment criteria for the course included the following three, shown as examples to demonstrate my programming skills:
                            </p>
                        </Col>
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

export default About;