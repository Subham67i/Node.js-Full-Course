const jwt = require('jsonwebtoken');

// user login data
let user = {
    id : 'AA123BB',
    name : 'subham',
    email : 'subham@gmail.com',
    password : 'subham123'
}

// creat a token 
let payload = {
    user : {
        id : user.id,
        name : user.name

    }
};
let secretKey = 'ssshhh';
let token = jwt.sign(payload,secretKey,{expiresIn: 30000000});
console.log(token);

// verify the token
 let decoded = jwt.verify(token, secretKey);
 console.log(decoded);