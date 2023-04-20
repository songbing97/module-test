export let a = 1;

export default {
  sk: 'sk'
}

export function changeA () {
  a++
}

const d = 4
const e = 5

console.log(1)

export {
  a as b,
  a as c,
  d,
  e
}