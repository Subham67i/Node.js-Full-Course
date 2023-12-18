const os = require('os');

// home dir location 
let homeDir = os.homedir();
 console.log(`Home Dir ${homeDir}`);


// toal memory 
let totalMemory = os.totalmem();
console.log(`Total Memory : ${totalMemory}`);

// computer name 
let hostName = os.hostname();
console.log(`Computer Name ${hostName}`);

// free memory 
let freeMemory = os.freemem();
console.log(`free memory ${freeMemory}`);

// userinfo
let userInfo = os.userInfo();
console.log(userInfo);