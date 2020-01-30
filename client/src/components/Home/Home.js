import React, { useState, useEffect } from 'react';

import StarRatings from 'react-star-ratings';

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
                    <StarRatings 
                        rating={4.5}
                        starRatedColor="#e50914"
                        starDimension="40px"
                        starSpacing="7px"
                    />
                    <p>"This is my guy. Consistent, super flexible, always on time, respectful, always gets it right, and I never felt like I was in a rush."</p>
                </div>
                <div className="review review__2">
                    <StarRatings 
                        rating={4.5}
                        starRatedColor="#e50914"
                        starDimension="40px"
                        starSpacing="7px"
                    />
                    <p>"This is my guy. Consistent, super flexible, always on time, respectful, always gets it right, and I never felt like I was in a rush."</p>
                </div>
                <div className="review review__3"> 
                    <StarRatings 
                        rating={4.5}
                        starRatedColor="#e50914"
                        starDimension="40px"
                        starSpacing="7px"
                    />
                    <p>"This is my guy. Consistent, super flexible, always on time, respectful, always gets it right, and I never felt like I was in a rush."</p>
                    <div className="review__author">
                        <span>- User Name</span>
                        <img src="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 