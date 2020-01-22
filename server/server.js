const express = require('express');
const graphqlHTTP = require('express-graphql'); // handle graphql requests on express -- naming convention is key
const cors = require('cors')

const app = express();

// allow cross origin requests
app.use(cors());

app.use('/graphql'. graphqlHTTP({
    //schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000');
})