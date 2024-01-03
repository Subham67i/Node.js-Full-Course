const http = require('http');
const router = require('./router/appRouting');


const hostname='192.168.29.197';  // is a ip address
const port = 5000;           //  is liken mane get inter and exit is port number is inter and one port number is exit

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
let server = http.createServer((request , response)=> {
    
    response.statusCode = 200;
    response.setHeader('Content-Type' ,  'text/html');
    router.mapRoutes(request,response);
});

server.listen(port , hostname , () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})