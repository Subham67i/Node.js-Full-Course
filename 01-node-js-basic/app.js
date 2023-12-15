console.log('welcome to node js');

// variable creation 
let moduleName = 'Node js';
console.log(`Module Name : ${moduleName}`);

// object  
let student = {
    id : 'AA0076',
    name : 'suraj',
    sex : ' mal', 
    age : 25
};
console.log(student);

// array 
let employees = [
    {
        name : 'subham',
        age : 24,
        sex : 'mal',
        designation : 'softwar engineer',
        location : 'bihar'
    },
    {
        name : 'suraj',
        age : 25,
        sex : 'mal',
        designation : 'M E R N devloper',
        location : 'bihar'
    }
]
console.table(employees);


// function
let greet = (name) => {
    let msg = `hello! ${name} Good Evening`;
    console.log(msg);
}
greet('suraj');
