import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {} from 'reactstrap';
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
                        <p>If you want to get in direct contact with me, use the following information to get in touch:</p>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;