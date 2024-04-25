import React from 'react';
import { image } from '../data/user';

function About() {
    return (
        <div>
            <h1>About</h1>
            <img src={image} alt="Profile" />
        </div>
    );
}

export default About;
