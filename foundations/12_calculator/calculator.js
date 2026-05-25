const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(numArr) {
	return numArr.reduce((total, curr) => total+curr, 0);
};

const multiply = function(numArr) {
	return numArr.reduce((total, curr) => total*curr, 1);
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(num) {
  let ans = 1;
  for (let i = 1; i <= num; i++) ans *= i;
	return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
