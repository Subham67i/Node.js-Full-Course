const bcrypt = require('bcryptjs');

// form data 
let user = {
    name : 'subham',
    email : "subham1@gmail.com",
    password : 'subham_1234'
};

let salt = bcrypt.genSaltSync(10);
let hashedPassword = bcrypt.hashSync(user.password, salt);

let updatedUser = {
    ...user,
    password: hashedPassword
};
// console.log(updatedUser);

// match the password for login
let isMatch = bcrypt.compareSync('subham_1234',updatedUser.password);
if(isMatch){
    console.log(`login is success`);
}
else{
    console.log(`invalid password`);
}