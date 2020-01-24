const express = require('express');
const router = express.Router()
const { GraphQLClient } = require('graphql-request');
const yelpApiUrl = "https://api.yelp.com/v3/graphql";

const client = new GraphQLClient(yelpApiUrl, {
    headers: {
        Authorization: `Bearer W9xPCYm2aOXa1Nd1ygsJs4pfWeySayBVWyFhrgbdLczQClTzdoUKOpEKAvmxrLCUmJ3W9BjgWT4YsZOeSqlq3BElFXTlUDmrNgDwaPgnt8W3LtJUOcmrIJ1f8BXfXXYx`
    },
})

router.get('/', async (req, res, next) => {
    try {
        const getShop  = `
            {
                business(id: "finos-barber-shop-los-angeles"){
                    name
                    url
                    rating
                    review_count
                    display_phone
                    location{
                        address1
                        city
                        state
                        postal_code
                    }
                }
            }
        `
        client.request(getShop).then(data => {console.log(data); res.json(data)});
    } catch(err){
        console.log(err)
    }
})

module.exports = router;