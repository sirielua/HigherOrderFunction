'use strict';

const contract = (fn, ...types) => (...args) => {
  args.forEach((val, i) => {
    const requiredArgType = types[i].name.toLowerCase();
    if (typeof val !== requiredArgType) {
      throw new TypeError(`Argument ${val} is not ${requiredArgType}`);
    }
  });

  const res = fn(...args);

  const requiredResType = types[types.length - 1].name.toLowerCase();
  if (typeof res !== requiredResType) {
    throw new TypeError(`Result ${res} is not ${requiredResType}`);
  }

  return res;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Output: Hello world!

module.exports = { contract };
