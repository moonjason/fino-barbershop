import React from 'react'

const Pricing = () => {
    return (
        <div id="pricing-container">
            <div id="pricing__text">
                <h1 className="pricing--title">Booking and Pricing</h1>
                <h5>Text Fino at (213) 858-2325 for available times</h5>
                <h5>Men's cuts are $25</h5>
            </div>

            <div id="pricing__carousel">
                <img className="photo" src="img/fino-shop.jpeg" alt="fino 1"/>
                <img className="photo" src="img/fino-cut3.jpeg" alt="fino 2"/>
            </div>
    
        </div>
    )
}

export default Pricing;