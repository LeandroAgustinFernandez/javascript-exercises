const fibonacci = function (number) {
  Number(number);
  if (number < 0) return "OOPS";
  const fib = [0, 1];
  for (let i = 2; i <= number; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[number];
};

// Do not edit below this line
module.exports = fibonacci;
