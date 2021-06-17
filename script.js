// **********************************
// How do I convert an iterable to an array in JavaScript?
// ***********************************

// use the spread operator to convert iterables or, as they are sometimes referred to, array-likes.
// the spread operator (...) allows an iterable to be expanded in places where zero or more arguments or elements are expected.

// 1 STRING:
// spread operator is used to make an array of strings each one representing a character of the original string:

const name = 'spiral';
const letters = [...name];
// console.log('Letters of name:' + letters);
// Expected: Letters of name:s,p,i,r,a,l

// 2. NODELIST
// A NodeList is a collection of nodes, returned by methods such as document.childNodes() or document.querySelectorAll().
// While it implements some methods that help manipulate it as an array (e.g. NodeList.prototype.forEach())
// When the spread operator is applied to it, the result is an array of the contained nodes:

const nodes = document.body.childNodes;
// console.log(nodes); // NodeList(6) [text, h1, text, ol, text, script]

// console.log(typeof nodes);  // object

// console.log('Is nodes an array?: ' + Array.isArray(nodes)); // Is nodes an array?: false

const nodeArray = [...nodes];
// console.log(nodeArray); // (6) [text, h1, text, ol, text, script]

// console.log(typeof nodeArray);  // object

// console.log('Is nodeArray an array?: ' + Array.isArray(nodeArray)); // Is nodeArray an array?: true

// console.log(nodes === nodeArray); // false

// **********************************
// Make any JavaScript value iterable
// ********************************************

// JavaScript's `Symbol.iterator` is a very powerful tool that every web developer should learn how to use.
// It allows you to define and customize the way a value is iterated, effectively allowing you to make any value iterable.
// You can easily apply this knowledge to plain JavaScript objects and even classes.

// All you need to correctly define an iterator is a generator function yielding each of the iteration values.
// This could be used to retrieve key-value pairs in an object, call specific getter functions from a class or split a number into an array of digits:

const obj = { a: 1, b: 2, c: 3 };
// console.log([...obj]);  // TypeError: obj is not iterable

obj[Symbol.iterator] = function*() {
  for (let key of Object.keys(obj)) yield { [key]: obj[key] };
};

// console.log([...obj]);  // [{a:1}, {b:2}, {c:3}]

class IterableNumber extends Number {
  *[Symbol.iterator]() {
    for (let digit of [...`${this}`].map(d => Number.parseInt(d))) yield digit;
  }
}

const num = new IterableNumber(1337);
// console.log([...num]);  // (4) [1, 3, 3, 7]
