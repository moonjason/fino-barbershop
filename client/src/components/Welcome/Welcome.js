import React from 'react';


const Welcome = () => {
    return (
        <div id="pricing-container">

            <div id="pricing__carousel">
                <img className="photo" src="img/fino-cut1.jpeg" alt="fino 1"/>
                <img className="photo" src="img/fino-cut2.jpeg" alt="fino 1"/>
            </div>

            <div id="pricing__text">
                <h1 className="pricing--title">Welcome to Fino's</h1>
                <h5>Great quality cuts and good vibes.</h5>
            </div>

        </div>
    )
}

export default Welcome;