import React from 'react';
import { Container } from 'reactstrap';
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
                    <ContactCard />
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;