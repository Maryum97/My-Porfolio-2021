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
                        <Col>Image 1</Col>
                        <Col>Image 2</Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio;