import('./mjs.mjs').then(res => {
  console.log(res)
})

// import A from './mjs.mjs' SyntaxError: Cannot use import statement outside a module. In commonjs, you can't load ES6 Module directly
// console.log(A)

// Error [ERR_REQUIRE_ESM]: require() of ES Module C:xxx\module-test\mjs.mjs not supported.
const A = require('./cjs.cjs') 
console.log('A:', A)
A.cjs = 'A cjs';

const B = require('./cjs.cjs') 
console.log('B:', B)

// Conclusion, you can use UMD syntax to import a commonjs module which declared cjs file, but you can't use commonjs require UMD module directly, even a mjs file, 