

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const greeting = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
greeting('susan')
greeting(names.person1)
greeting(names.person2)
greeting(data.singlePerson.name)
