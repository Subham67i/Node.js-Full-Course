const gravatar = require('gravatar');

// user  ----------------------------------
 let user = {
    name : 'subham',
    email : 'subham3716@gmail.com',
    password : 40808588
 };

 let image = gravatar.url(user.email, {
    s : '200',
    r : 'G',
    d : 'mm'
 });
 user.image = image;
 console.log(user);
  