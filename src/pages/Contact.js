import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <Header
                    title="My Contact Information"
                />
            </div>
        </div>
    )
}

export default Contact;