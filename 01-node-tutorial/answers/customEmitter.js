

const EventEmitter = require("events");
const emitter = new EventEmitter();

// Event handler for 'greet' event
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Event handler for 'status' event
emitter.on("status", (status, code) => {
  console.log(`Status: ${status} (Code: ${code})`);
});

// Emitting events
emitter.emit("greet", "Alice");
emitter.emit("status", "Success", 200);

// Emitting an event with a delay
setTimeout(() => {
  emitter.emit("greet", "Bob");
}, 2000);

// Async function waiting for an event
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("done", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("Received event:", msg);
};

doWait();

setTimeout(() => {
  emitter.emit("done", "All tasks completed");
}, 4000);
