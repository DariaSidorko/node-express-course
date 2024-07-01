

const { writeFile, readFile } = require("fs").promises;  

const lines = "Line 1\nLine 2\nLine 3\n"

const filename = "./temporary/temp.txt"


// Async function to write three lines to temp.txt
const writer = async () => {
    try {
        await writeFile(filename, lines)
        console.log(`Line ${lines} was written to ${filename}`);
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

// Async function to read three lines from the temp.txt
const reader = async () => {
    try {
        const result = await readFile(filename, { encoding: 'utf8', flag: 'r' })
        console.log(`From the file: \n  ${result}`);
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

// Async readWrite function
const readWrite = async () => {
    try {
        await writer()
        await reader()
        console.log(`done here!`);
    } catch (error) {
        console.error('Error in the readWrite func');
    }
}

// Calling the readWrite function
readWrite();
