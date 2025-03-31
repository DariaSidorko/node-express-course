
const os = require('os')

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

// info about current user
const user = os.userInfo()
console.log(user)

const currentOS = {
  name: os.type(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  release: os.release()
}
console.log(currentOS)