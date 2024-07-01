

const fs = require('fs');


const lines = [
  'First line\n',
  'Second line\n',
  'Third line\n'
];

function writeLinesToFile(filename, lines, index) {
  if (index < lines.length) {
    if(index === 0){
        fs.writeFile(filename, lines[index], (err) => {
        if (err) throw err;
        console.log(`Line ${index + 1} was written to ${filename}`);
        });
    } else {
        fs.appendFile(filename, lines[index], (err) => {
        if (err) throw err;
        console.log(`Line ${index + 1} was written to ${filename}`);
        });
    }

    // Call recursively to write the next line
    writeLinesToFile(filename, lines, index + 1);
    
  } else {
    console.log(`All lines were written to ${filename} successfully`);
  }
}

// Start writing lines to file
const filename = './temporary/fileB.txt';
writeLinesToFile(filename, lines, 0);

