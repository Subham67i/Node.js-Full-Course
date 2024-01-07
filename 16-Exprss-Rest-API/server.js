const express = require('express');
const app = express();
const dotEnv = require('dotenv');

// configure dotEnv 
dotEnv.config();

// configure express to recive the form data
app.use(express.json());

 
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/', (request , response) => {
   response.send(`<h2>Welcome to Express with Rest API </h2>`)
})

// configar the router with express 
app.use('/api', require('./router/userRouter'));

app.listen(port, hostname , () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
})