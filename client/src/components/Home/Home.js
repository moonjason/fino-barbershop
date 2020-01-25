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
            <header className="header-container">
                <h1 className="title">Fino's Barbershop</h1>
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