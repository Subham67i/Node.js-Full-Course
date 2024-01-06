const express = require('express');
const app = express();
const dotEnv = require('dotenv');

// configure dotEnv 
dotEnv.config();


const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

// configar the router with express 
app.use('/', require('./router/apiRouter'));


//for static file
app.use('/public', express.static('public'));
 


app.listen(port, hostname , () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
})