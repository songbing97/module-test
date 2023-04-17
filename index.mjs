import * as Module from './module.js'

// // In a static website project and browser environment, only ES6 module is supported, you can't use common.js 
// // But a node native environment, you must set "type": "module" to use ES6 module or use .mjs file.
console.log('hello, world')
console.log(Module)

import * as MJS from './mjs.mjs' // using import and export in mjs file is also ok if your package.json "type": "module"
console.log(MJS)