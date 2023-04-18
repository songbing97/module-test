import * as Module from './module.js'

// // In a static website project and browser environment, only ES6 module is supported, you can't use common.js 
// // But a node native environment, you must set "type": "module" to use ES6 module or use .mjs file.
console.log('hello, world')
console.log(Module)

import cjs from './cjs.cjs'
console.log(cjs)