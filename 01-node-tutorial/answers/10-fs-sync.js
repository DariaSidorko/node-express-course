


const fs = require('fs');
const path = './temporary/fileA.txt';

// Write first line (create file)
fs.writeFileSync(path, 'First line\n');

// Append additional lines
fs.writeFileSync(path, 'Second line\n', { flag: 'a' });
fs.writeFileSync(path, 'Third line\n', { flag: 'a' });

// Read and log file contents
const data = fs.readFileSync(path, 'utf8');
console.log(data);


