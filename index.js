import * as Module from './module.js'
console.log(Module)
// TypeError: Cannot add property sk, object is not extensible

import { a } from './module.js'
// TypeError: Assignment to constant variable.
// a = 2;

import * as Module2 from './module.js'
import { a as b } from './module.js'
console.log('Module2:', Module2)
console.log('b:', b)
// // In a static website project and browser environment, only ES6 module is supported, you can't use common.js 
// // But a node native environment, you must set "type": "module" to use ES6 module or use .mjs file.
// import cjs from './cjs.cjs'
// console.log(cjs)

// import X from 'colors' // commonjs modules of node_modules do not need cjs

// console.log(X)