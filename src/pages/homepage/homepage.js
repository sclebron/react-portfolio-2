import React from 'react';
import './homepage.css';
import Footer from '/Users/sophielebron/Desktop/coding-projects/react-portfolio-2/src/components/footer/footer.js';
import Particles from './homepageParticles.jsx';

function Homepage() {
    return (
        <div className="home">
            <Particles />
            <text className="text">
                Hello, I'm <mark className="name">Sophie LeBron.</mark> <br />
                I'm a full stack developer.
            </text>
            <Footer />
        </div>
    );
}

export default Homepage;