const express = require('express');
const router = express.Router();
const { GraphQLClient } = require('graphql-request');

const yelpApiUrl = "https://api.yelp.com/v3/graphql";

const client = new GraphQLClient(yelpApiUrl, {
    headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
    },
})

const getShop  = `
    query business(id: "finos-barber-shop-los-angeles") {
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
`