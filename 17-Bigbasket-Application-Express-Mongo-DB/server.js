const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// configure cors
app.use(cors());

//configur express to recive the form data
app.use(express.json());

//configure dotEnv
dotenv.config();

//get Hostname , port 
const Hostname = process.env.HOST_NAME;
const port = process.env.PORT;

// configure the router
app.use('/api' , require('./router/productRouter'));

// connect to mongodb database
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    // useUnifieldTopology : true,
     useNewUrlParser : true,
    // useFindAndModify : false,
    // useCreateIndex : true

}).then((response)=>{
      console.log('Connect to mongodb Successful...............');
}).catch((error)=>{
     console.error(error);
    process.exit(1); // stop the node js process if unable to connect to db   
});


 // empty URL 
 app.get('/' , (requset, response) => {
    response.send(`<h2>Welcome to BigBasket srever Application</h2>`)
 }); 

app.listen(port , Hostname, () =>{
    console.log(`Express server is started at http://${Hostname}:${port}`);
})