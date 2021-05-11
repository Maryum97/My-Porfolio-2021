import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Home() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Header
                    title="About Me"
                />
            </div>
        </div>
    )
}

export default Home;