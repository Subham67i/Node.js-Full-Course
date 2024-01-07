const express = require('express');
const router = express.Router();
const uuid = require('uuid');

let users = [{"id":"29-4144871","first_name":"Mikkel","last_name":"Powrie","email":"mpowrie0@umich.edu","gender":"Male","ip_address":"237.193.5.117"},
{"id":"96-4267278","first_name":"Nathaniel","last_name":"Polfer","email":"npolfer1@columbia.edu","gender":"Male","ip_address":"137.15.10.180"},
{"id":"91-1619088","first_name":"Ainslee","last_name":"Whalley","email":"awhalley2@bluehost.com","gender":"Female","ip_address":"174.76.65.200"},
{"id":"46-3398165","first_name":"Amalia","last_name":"Vaszoly","email":"avaszoly3@wix.com","gender":"Female","ip_address":"203.98.141.79"},
{"id":"71-7724148","first_name":"Rakel","last_name":"Stobo","email":"rstobo4@nhs.uk","gender":"Female","ip_address":"43.127.108.54"},
{"id":"37-1196204","first_name":"Tori","last_name":"Schuster","email":"tschuster5@php.net","gender":"Non-binary","ip_address":"151.156.203.50"},
{"id":"95-0634872","first_name":"Krystle","last_name":"Timperley","email":"ktimperley6@mac.com","gender":"Female","ip_address":"94.209.121.187"},
{"id":"54-1518835","first_name":"Elysha","last_name":"Letterick","email":"eletterick7@si.edu","gender":"Female","ip_address":"188.153.72.187"},
{"id":"30-7341715","first_name":"Angie","last_name":"Eallis","email":"aeallis8@phpbb.com","gender":"Female","ip_address":"32.250.1.80"},
{"id":"97-9497571","first_name":"Willabella","last_name":"Mil","email":"wmil9@psu.edu","gender":"Female","ip_address":"247.148.130.132"}]
// 1)get all the users
/*
 * USAGE : get all the user
   URL : http:// 127.0.0.1 : 5000/api/users
   request : GET 
   Method : router.get();
 */ 
router.get('/users', (request , response) => {
    response.status(200).json({
      total : users.length,
      users : users
    });   
}); 

/*
 * 2)USAGE : get a singal user
   URL : http:// 127.0.0.1 : 5000/api/users/:id 
   request : GET 
   Method : router.get(); 
 */
   router.get('/users/:id', (request , response) => {
    let userId = request.params.id;
    let seletedUser = users.find( (user) =>{
      return user.id === userId;
    })
    response.status(200).json(seletedUser); 
});

/**
 * 3)USAGE : creat a new user 
 * URL : http://127.0.0.1:5000/api/users/
 * Request : POST
 * Method : router.post();
 */
router.post('/users', (request , response) => {
  let newUser = {
    id : uuid.v4(),
    first_name : request.body.first_name,
    last_name : request.body.last_name,
    email : request.body.email,
    gender : request.body.gender,
    ip_address : request.body.ip_address
  };
  // add too the array 
  users.unshift(newUser);
  response.status(200).json({
      msg : `Created a  new  user `,
      user : newUser
  }); 
});

/*
 4)USAGE : update a user 
 * URL : http://127.0.0.1:5000/api/users/:id
 * Request :PUT
 * Method : router.put (); 
 */
  router.put('/users/:id', (request , response) => {
      let userId = request.params.id;
      let updatedUser = {
        id : userId,
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address
      };
      let requiredIndex = users.map(user => user.id).indexOf(userId);
      // replace with new user
      users.splice(requiredIndex, 1, updatedUser)
      response.status(200).json({
        msg : `Update a User`,
        user :  updatedUser 
      }); 
  });

/**
 * 5) USAGE : Delete a user
 * URL : http://127.0.0.1:5000/api/users/:id
 * Request : Delete
 * Method  : router.delete();
 */

 router.delete('/users/:id' , (request , response) =>{
   let userId = request.params.id;
   
   response.status(200).json({
    msg : `Delete a user`,
    userId : userId
   })

 })


module.exports = router;