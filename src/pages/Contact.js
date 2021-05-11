import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Header
                    title="My Contact Information"
                />
            </div>
        </div>
    )
}

export default Contact;