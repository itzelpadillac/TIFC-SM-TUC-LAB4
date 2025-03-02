const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  result = a / b;
  return parseFloat(result.toFixed(2))
}

function multiply(a, b){
  result = a * b;
  return parseFloat(result.toFixed(2));
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};