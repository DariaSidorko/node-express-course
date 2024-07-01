

const { createReadStream } = require('fs')

// File path to big.txt
const fileDirectory = '../content/big.txt';

// HighWaterMark values to test
const highWaterMarks = [200, 500, 1000];

highWaterMarks.forEach(highWaterMark => {

    // Create a ReadStream with specified highWaterMark
    const readStream = createReadStream(fileDirectory, {
        encoding: 'utf8',
        highWaterMark: highWaterMark
    });

    let counter = 0;

    readStream.on('data', chunk => {
        counter++;
        // Optional console.log to track each chunk 
        // console.log(`Received chunk ${counter}`);
    });

    readStream.on('end', () => {
        console.log(`\nTotal chunks: ${counter} \n highWaterMark: ${highWaterMark} \n`);
    });

    readStream.on('error', err => {
        console.error(`Error: ${err.message}`);
    });
});
