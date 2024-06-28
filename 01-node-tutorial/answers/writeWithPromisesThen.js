

const { writeFile, readFile, appendFile } = require("fs").promises;  

const lines =[
    "Line One \n",
    "Line Two \n",
    "Line Tree \n"
]

const filename = "./temporary/temp.txt"

// Async function to write three lines to temp.txt
const writer = async () => {
    writeFile(filename, lines[0])
    .then(() => {  
    return appendFile(filename, lines[1]) 
    })  
    .then(() => {  
        return appendFile(filename, lines[2]) 
    }) 
    .catch((error) => {  
        console.log("An error occurred: ", error)  
    })  
}

writer()