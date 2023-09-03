import React from 'react';
import './about.scss';
import reactico from './react.ico'
const About = () => {
    return (
        <div className="about-page-container">
            <header className="about-header">
                <h1>Our Company</h1>
            </header>
            <main className="about-main">
                <h3>Our Team</h3>
                <ul type={'square'}>
                    <li>Abhishek - BTech 7th semester</li>
                    <li>Deepak Negi - BTech 7th semester</li>
                </ul>
                <h3>Project created using</h3>
                <ul type={'square'}>
                    <li>Mongo DB</li>
                    <li>Express JS</li>
                    <li>React JS</li>
                    <li>Node JS</li>
                </ul>
                <ul className='about-icon'>
                    <li><img src='https://img.icons8.com/color/512/mongodb.png' height='35px' alt={''} /></li>
                    <li><img src='https://img.icons8.com/color/512/express-js.png' height='35px' alt={''} /></li>
                    <li><img src='https://img.icons8.com/plasticine/512/react.png' height='35px' alt={''} /></li>
                    <li><img src='https://img.icons8.com/fluency/512/node-js.png' height='35px' alt={''} /></li>
                </ul>
            </main>
        </div>
    );
}

export default About;
