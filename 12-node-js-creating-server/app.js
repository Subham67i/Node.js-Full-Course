const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname='192.168.29.197';  // is a ip address
const port = 5000;           //  is liken mane get inter and exit is port number is inter and one port number is exit

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
let server = http.createServer((request , response)=> {
    let requestURL = request.url;
    console.log(requestURL);
    response.statusCode = 200;
    response.setHeader('Content-Type' , 'text/html');
   fs.readFile(path.join(__dirname, 'index.html'),'utf-8',(err,data) => {
       if(err) throw err;
       response.end(data);
   });
});

server.listen(port , hostname , () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})