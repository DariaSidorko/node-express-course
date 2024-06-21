

const os = require('os')


const currentOS = {
  name: os.type(),
  type: os.type(),
  release: os.release(),
  machine: os.machine(),
  totalMem: os.totalmem(),
  hostName: os.hostname(),
  uptime: os.uptime()
}
console.log(currentOS)
