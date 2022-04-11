const sumAll = function (number1, number2) {
  if (number1 < 0 || number2 < 0) return "ERROR";
  if (typeof number1 != "number" || typeof number2 != "number") return "ERROR";
  let min = number1 < number2 ? number1 : number2;
  let max = number1 > number2 ? number1 : number2;
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
