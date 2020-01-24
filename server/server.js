require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql'); // handle graphql requests on express -- naming convention is key
const cors = require('cors')
const yelpRouter = require('./routes/yelp');
const app = express();

// allow cross origin requests
app.use(cors());

app.use('/yelp', yelpRouter)

app.use('/graphql', graphqlHTTP({
    yelpRouter,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000');
})