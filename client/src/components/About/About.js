import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return(
        <div id="about">
            <h1 id="about__title">About Me</h1>
            <div id="msg-container">
                <div id="msg-container__1">
                    <img className="abt-image" src="img/fino-bmw1.jpeg" alt="fino bmw"/>
                </div>
                <div id="msg-container__2">
                    <div>In 2017, I discovered my passion for cutting hair and decided to provide my services to the public. I find it extremely rewarding for me to send off a customer happy with their fresh new style as it motivates me to keep improving. 
                    <br/>
                    <br/>
                    Being a barber allows me to channel one of my artistic ambitions as I am also very involved in music. So if I'm not cutting hair, I'm on the grind to make a name for myself in the music industry. 
                    <br/>
                    <br/>
                    Click on any of the links below to support my journey! Thank you for stopping by my website.</div>
                    <div id="about-icon-container">
                        <FontAwesomeIcon className="about--icon" size="2x" icon={['fab', 'instagram']}/>
                        <FontAwesomeIcon className="about--icon" size="2x" icon={['fab', 'soundcloud']}/>
                        <FontAwesomeIcon className="about--icon" size="2x" icon={['fab', 'youtube']}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;