const ftoc = function(fahrenheitTemperature) {
  let celciousTemperature = (fahrenheitTemperature-32)*(5/9);
  return (Number.isInteger(celciousTemperature)) ?  Number(celciousTemperature) : Number(celciousTemperature.toFixed(1)); 
};

const ctof = function(celciousTemperature) {
  let fahrenheitTemperature = ((celciousTemperature*(9/5))+32)
  return (Number.isInteger(fahrenheitTemperature)) ?  Number(fahrenheitTemperature) : Number(fahrenheitTemperature.toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
