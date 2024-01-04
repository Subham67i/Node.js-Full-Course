const express = require('express');
const { request } = require('http');
const app = express(); // initialize express
const path = require('path');

const hostname = '127.0.0.2';
const port = 5000;

//for static file
app.use('/public', express.static('public'))

// for a html tag
app.get('/', (request,response)=>{
    response.send(`<h2>Welcome to Express JS</h2>`);
});

//for a html page
app.get('/home',(request,response)=>{
    response.sendFile(path.join(__dirname, 'index.html'));
})

// for a json file
let githubUser = {
    
        "login": "Subham67i",
        "id": 130320110,
        "node_id": "U_kgDOB8SG7g",
        "avatar_url": "https://avatars.githubusercontent.com/u/130320110?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Subham67i",
        "html_url": "https://github.com/Subham67i",
        "followers_url": "https://api.github.com/users/Subham67i/followers",
        "following_url": "https://api.github.com/users/Subham67i/following{/other_user}",
        "gists_url": "https://api.github.com/users/Subham67i/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Subham67i/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Subham67i/subscriptions",
        "organizations_url": "https://api.github.com/users/Subham67i/orgs",
        "repos_url": "https://api.github.com/users/Subham67i/repos",
        "events_url": "https://api.github.com/users/Subham67i/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Subham67i/received_events",
        "type": "User",
        "site_admin": false,
        "name": "SUBHAM KUMAR",
        "company": null,
        "blog": "https://aesthetic-twilight-e6b88e.netlify.app/",
        "location": "Chandigarh",
        "email": null,
        "hireable": null,
        "bio": "Passionate MERN Stack Developer 🚀 | Code Craftsman 💻 | Git Enthusiast 🌟 | Building Web Magic 🌐\r\n\r\n",
        "twitter_username": null,
        "public_repos": 17,
        "public_gists": 2,
        "followers": 4,
        "following": 5,
        "created_at": "2023-04-09T22:37:56Z",
        "updated_at": "2023-11-01T10:18:26Z"
      };  
app.get('/user', (request , response)=>{
    response.json(githubUser);
}) 

//for download a file from server
app.get('/png', (request,response)=>{
    response.download(path.join(__dirname, 'card1.png'))
})


app.listen(port,hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
})