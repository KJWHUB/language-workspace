const fn = function () {};
const arrowFn = () => {};

console.log(fn.prototype); // { constructor: [Function: fn] }
// console.log(arrowFn.prototype); // undefined

console.log(fn.prototype.constructor); // [Function: fn]
// console.log(arrowFn.prototype.constructor); // undefined

console.log(fn.prototype.constructor === fn); // true
// console.log(arrowFn.prototype.constructor === arrowFn); // false

console.log(fn.prototype.constructor === arrowFn); // false
// console.log(arrowFn.prototype.constructor === fn); // false

// console.log(fn.prototype.constructor === Function); // true
// console.log(arrowFn.prototype.constructor === Function); // true

console.log(typeof fn); // function
console.log(typeof arrowFn); // function
