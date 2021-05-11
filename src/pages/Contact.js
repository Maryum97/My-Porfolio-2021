import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <Header
                    title="My Contact Information"
                />
                <Container>
                    <Row>

                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;