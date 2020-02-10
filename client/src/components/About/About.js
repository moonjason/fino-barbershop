import React from 'react';

const About = () => {
    return(
        <div id="about">
            <h1 id="about__title">About Me</h1>
            <div id="msg-container">
                <div id="msg-container__1">
                    <img className="abt-image" src="img/fino-bmw1.jpeg" alt="fino bmw"/>
                </div>
                <div id="msg-container__2">
                    <div>In 2017, I discovered my passion for cutting hair and decided to provide my services to the public. It is extremely rewarding for me to send off a customer happy with their new fresh style as it motivates me to keep improving. 
                    <br/>
                    <br/>
                    Being a barber allows me to channel one of my artistic ambitions as I am also very involved in music. As a side hustle, I'm on the grind to make a name in the music industry.</div>
                </div>
            </div>
        </div>
    )
}

export default About;