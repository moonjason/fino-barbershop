import React, { useState, useEffect } from 'react';

import StarRatings from 'react-star-ratings';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  const Home = () => {
    const [yelpData, setYelpData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`http://localhost:4000/yelp/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }, 
            })
            const parsedData = await data.json();
            setYelpData(parsedData);
        }
        getData();
    }, [])

    return (
        <div className="home"> 
            <header className="header">
                <h1 className="header__title">Fino's Barber Shop</h1>
                <div className="header-business-card">
                    <h6>333 S Catalina St</h6>
                    <h6>Los Angeles, CA 90020</h6>
                    <h6>(213) 858-2325</h6>
                    <h6 className="app--only">*Appointment Only</h6>
                </div>
            </header>
            <div className="header-elements">
                <div className="header__images">
                    <p>images</p>
                </div>
                <div className="header__business-card">
                    <p>Business</p>
                </div>
            </div>
            <div className="reviews-container">
                <div className="review review__1">
                    <div className="star-container">
                        <StarRatings
                            rating={5}
                            starRatedColor="#e50914"
                            starDimension="22px"
                            starSpacing="3px"
                        />
                    </div>
                    <p><em>"Awesome barber that takes pride in what he does. Low key spot and gives you full attention. Very convenient you can schedule through text and times are flexible. Will be coming back often."</em></p>
                    <div className="review__author">
                        <span className="username">- <strong>Rizzo K.</strong></span>
                    </div>
                </div>
                <div className="review review__2">
                    <div className="star-container">
                        <StarRatings
                            rating={5}
                            starRatedColor="#e50914"
                            starDimension="22px"
                            starSpacing="3px"
                        />
                    </div>
                    <p><em>"This is my guy. Consistent, super flexible, always on time, respectful, always gets it right, and I never felt like I was in a rush. ... Can't recommend this barber enough"</em></p>
                    <div className="review__author">
                        <span className="username">- <strong>Carlo Q.</strong></span>
                    </div>
                </div>
                <div className="review review__3"> 
                    <div className="star-container">
                        <StarRatings
                            rating={5}
                            starRatedColor="#e50914"
                            starDimension="22px"
                            starSpacing="3px"
                        />
                    </div>
                    <p><em>"Very detailed and knows how important hair can be for men. I was very satisfied with the laidback atmosphere and his flexibility. I highly recommend this place. I'm coming back for my next cuts!"</em></p>
                    <div className="review__author">
                        <span className="username">- <strong>Darin J.</strong></span>
                    </div>
                </div>
            </div>
            <div className="more-reviews">
                <p className="more__reviews">more reviews on Yelp <FontAwesomeIcon icon={['fab', 'yelp']}/></p>
            </div>
        </div>
    )
}

export default Home; 