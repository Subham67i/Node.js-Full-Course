 const greeting = require('./util/greeting');
 const stringUtil = require('./string-utils/utility')

 let message = greeting.greet('subham');
 let revString = stringUtil.reverseString(message);
 console.log(revString); 