let a = 1;

var module = {
  sk: 'sk'
};

function changeA () {
  a++;
}


console.log(1);

var Module2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get a () { return a; },
  changeA: changeA,
  default: module
});

console.log(Module2);
console.log('Module2:', Module2);
console.log('b:', a);
// // In a static website project and browser environment, only ES6 module is supported, you can't use common.js 
// // But a node native environment, you must set "type": "module" to use ES6 module or use .mjs file.
// import cjs from './cjs.cjs'
// console.log(cjs)

// import X from 'colors' // commonjs modules of node_modules do not need cjs

// console.log(X)
