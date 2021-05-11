import React from 'react';
import { Container, Row } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <Header
                    title="Contact Me"
                />
                <Container>
                    <Row>
                        <p>If you want to get in direct contact with me, fill out the form below to get in touch:</p>
                    </Row>
                    <ContactCard />
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;