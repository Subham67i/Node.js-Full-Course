const fs = require('fs');

let employees = [
{
    name : 'subham',
    age : 25 ,
    designation : 'project manager',
    location : 'mohali'
},
{
    name : 'rahul',
    age : 26 ,
    designation : 'devloper',
    location : 'chandigarh'
},
{
    name : 'ritanshu',
    age : 27 ,
    designation : 'team lead',
    location : 'mohali'
},
{
    name : 'janmejay',
    age : 28 ,
    designation : 'project manager',
    location : 'mohali'
}
];

// write json file
fs.writeFile('employees.json', JSON.stringify(employees) , 'utf-8', (err) => {
  if(err) throw err;
  console.log('data is written to json file');
});

//  read json file 
fs.readFile('employees.json', 'utf-8' , (err , data) => {
    if(err) throw err;
    let employees = JSON.parse(data)
    console.log(employees);
}); 