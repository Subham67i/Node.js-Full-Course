
const uuid = require('uuid');

let employees = [
    {
        id : uuid.v4(),
        name : 'subham',
        age : 24,
        sex : 'mal',
        designation : 'softwar engineer',
        location : 'bihar'
    },
    {
        id : uuid.v4(),
        name : 'suraj',
        age : 25,
        sex : 'mal',
        designation : 'M E R N devloper',
        location : 'bihar'
    }
]
console.table(employees);
