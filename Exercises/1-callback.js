'use strict';

const iterate = (obj, callback) => {
  Object.entries(obj).forEach(entry => {
    const [key, value] = entry;
    callback(key, value, obj);
  });
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});

module.exports = { iterate };
