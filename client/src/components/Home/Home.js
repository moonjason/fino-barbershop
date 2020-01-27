import React, { useState, useEffect } from 'react';

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
        </div>
    )
}

export default Home; 