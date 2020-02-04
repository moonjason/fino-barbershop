import React from 'react'

const Pricing = () => {
    return (
        <div id="pricing-containertwo">
            <div id="pricing__texttwo">
                <h1 className="pricing--title">Booking and Pricing</h1>

                <div id="menu">
                    <div id="pricing-desc-container">
                        <h5 className="pricing--desc">Haircut</h5>
                        <h5 className="pricing--desc">Beard Trim</h5>
                        <h5 className="pricing--desc">Haircut & Beard Trim</h5>
                        <h5 className="pricing--desc">Eyebrows</h5>
                    </div>
                    <div id="pricing-num-container">
                        <h5 className="pricing--num">$30</h5>
                        <h5 className="pricing--num">$20</h5>
                        <h5 className="pricing--num">$40</h5>
                        <h5 className="pricing--num">$15</h5>
                    </div>
                </div>


                <h5 style={{'paddingTop': '25px', 'width': '20rem'}}><i>Text Fino at (213) 858-2325 for availability</i></h5>
            </div>

            <div id="pricing__carouseltwo">
                <img className="photo" src="img/fino-shop.jpeg" alt="fino 1"/>
                <img className="photo" src="img/fino-cut3.jpeg" alt="fino 2"/>
            </div>
    
        </div>
    )
}

export default Pricing;