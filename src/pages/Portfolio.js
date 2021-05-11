import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Portfolio() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <Header
                    title="My Portfolio"
                />
            </div>
        </div>
    )
}

export default Portfolio;