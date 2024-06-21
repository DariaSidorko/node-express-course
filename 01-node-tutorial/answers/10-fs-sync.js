

const fs = require('fs');

// Text to write into the file
let data = "This is a file containing a collection"
           + " of programming languages.\n"
 + "1. C\n2. C++\n3. Python"; 

 // write
fs.writeFileSync("./temporary/fileA.txt", data); 

// read
const newData = fs.readFileSync('./temporary/fileA.txt',
    { encoding: 'utf8', flag: 'r' });

console.log(newData)

