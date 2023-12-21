const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'data','admin','data.txt'),'utf-8',(err,data) => {
   if(err) throw err;
   fs.writeFile(path.join(__dirname,'user','regular','users.txt'),data,'utf-8',(err , data)=>{
    console.log('data is written to a file');
   })
   
});