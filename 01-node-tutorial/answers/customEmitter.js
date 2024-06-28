

const EventEmitter = require("events");  

const emitter = new EventEmitter();  

// Event handler for 'greet' event
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Event handler for 'count' event
emitter.on('count', (count) => {
    console.log(`The count is: ${count}`);
    if (count === 5) {
        emitter.emit('greet', 'Alice');
    }
});

// Async function to emit hte event
const asyncEmitter = async () => {
    try {
        await emitter.emit('greet', 'John');
        console.log("We got an event!");
    } catch (error) {
        console.error('Error');
    }
}

// Emitting events
emitter.emit('greet', 'John');
emitter.emit('count', 1);

// Emitting 'count' event multiple times
for (let i = 2; i <= 5; i++) {
    emitter.emit('count', i);
}

asyncEmitter()



