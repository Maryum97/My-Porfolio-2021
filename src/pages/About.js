import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

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
                        <Col xs='3'>Hello!</Col>
                        <Col xs='9'>Hello!</Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About;