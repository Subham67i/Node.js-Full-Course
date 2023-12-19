 const fs = require('fs');


// Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it.
// Each task requires an answer before moving on to the next iteration
// ex- 1 2 3 4

 // Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously.
 /* ex- callback , promise , async-await 
  * Server -> 
  * 1 -> data
  * 2  -> data
  * 3  -> data
  * 4  -> data
  * ...................
  */

// Syns / Asyns 
// fs.writeFileSync('data.txt', 'welcome to fs module');
// console.log('data written to a file');

//read file content 
//let fileContent = fs.readFileSync('msg.txt','utf-8');

// write to another file
//let newContent = `welcome to fs module : ${fileContent}`;
//fs.writeFileSync('data.txt' , newContent,'utf-8');
// console.log(newContent);

// Async (callbacks, promises, Async-Await)
fs.readFile('msg.txt', 'utf-8',(err,data)=>{
    if(err) throw err;
    fs.writeFile('welcome txt',data,'utf-8',(err) => {
        if(err) throw err;
        console.log('data is written to a file');
    })
})

 // write the current program to another file

 fs.readFile('app.js','utf-8',(err , data)=>{
    if(err) throw err;
   fs.writeFile('program.js',data,'utf-8' ,()=>{
    if(err) throw err;
    console.log('data is written to a file');
   })
 })