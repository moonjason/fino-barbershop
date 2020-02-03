import React from 'react'

const Pricing = () => {
    return (
        <div id="pricing-containertwo">
            <div id="pricing__texttwo">
                <h1 className="pricing--title">Booking and Pricing</h1>
                <h5 className="pricing--desc">Haircut - $30</h5>
                <h5 className="pricing--desc">Beard Trim - $20</h5>
                <h5 className="pricing--desc">Haircut & Trim - $40</h5>
                <h5 className="pricing--desc">Eyebrows - $15</h5>
                <h5 className="pricing--desc" style={{'paddingTop': '25px'}}><i>Text Fino at (213) 858-2325 for availability</i></h5>
            </div>

            <div id="pricing__carouseltwo">
                <img className="photo" src="img/fino-shop.jpeg" alt="fino 1"/>
                <img className="photo" src="img/fino-cut3.jpeg" alt="fino 2"/>
            </div>
    
        </div>
    )
}

export default Pricing;