const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arrayOfNumbers) {
  return arrayOfNumbers.reduce((sum, value) => (sum += value), 0);
};

const multiply = function (arrayOfNumbers) {
  return arrayOfNumbers.reduce((res, value) => (res *= value));
};

const power = function (a, b) {
  let res = a;
  for (let i = 1; i < b; i++) {
    res = res * a;
  }
  return res;
};

const factorial = function (a) {
  if (a == 0) return 1;
  let res = 1;
  for (let index = a; index > 0; index--) {
      res = res * index;
  }
  return res;
};
console.log(factorial(5));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
