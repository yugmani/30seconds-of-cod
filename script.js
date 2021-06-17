// **********************************
// How do I convert an iterable to an array in JavaScript?
// ***********************************

// use the spread operator to convert iterables or, as they are sometimes referred to, array-likes.
// the spread operator (...) allows an iterable to be expanded in places where zero or more arguments or elements are expected.

// 1 STRING:
// spread operator is used to make an array of strings each one representing a character of the original string:

const name = 'spiral';
const letters = [...name];
console.log('Letters of name:' + letters);
// Expected: Letters of name:s,p,i,r,a,l

// 2. NODELIST
// A NodeList is a collection of nodes, returned by methods such as document.childNodes() or document.querySelectorAll().
// While it implements some methods that help manipulate it as an array (e.g. NodeList.prototype.forEach())
// When the spread operator is applied to it, the result is an array of the contained nodes:

const nodes = document.body.childNodes;
// console.log(nodes); // NodeList(6) [text, h1, text, ol, text, script]
// 0: text
// 1: h1
// 2: text
// 3: ol
// 4: text
// 5: script
// 6: text
// length: 7
// console.log(typeof nodes);  // object
nodes.forEach(item=>{
  console.log(item);
})

const nodeArray = [...nodes];
// console.log(nodeArray); // (6) [text, h1, text, ol, text, script]
// 0: text
// 1: h1
// 2: text
// 3: ol
// 4: text
// 5: script
// length: 6
// console.log(typeof nodeArray);  // object

nodeArray.forEach(item=>{
  console.log(item);
})

// console.log(nodes === nodeArray); // false