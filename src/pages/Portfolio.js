import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Portfolio() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Header
                    title="My Portfolio"
                />
            </div>
        </div>
    )
}

export default Portfolio;