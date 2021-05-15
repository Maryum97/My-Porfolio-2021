import React from 'react';
import { Container } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import InfoCard from '../components/InfoCard';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <Header
                    title="Contact Me"
                />
                <Container>
                    If you are interested in finding out more about me, or to offer me a job opportunity that fits my skills and interests, contact me by filling out the form below:
                    <ContactCard />
                    <br></br>
                    <br></br>
                    ...or, use the following information to learn more and get in touch with me directly:
                    <InfoCard />
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

export default Contact;