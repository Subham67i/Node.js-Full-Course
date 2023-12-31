const dotEnv = require('dotenv');
// dotenv -> store application credentials

// configar dotenv 
 dotEnv.config();
 
// secret key 
let key = process.env.JWT_SECRET_KEY;
console.log(key);

// mongodb local url 
let local_url = process.env.MONGO_DB_LOCAL_URL;
console.log(local_url);