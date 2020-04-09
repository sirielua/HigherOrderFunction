'use strict';

const store = x => () => x;

const read = store(5);
const value = read();
console.log(value); // Output: 5

module.exports = { store };
