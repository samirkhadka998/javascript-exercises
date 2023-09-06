const add = function(firstNum, secondNum) {
	 return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function(list) {
	 let sum = 0;
   list.forEach(element => {
     sum+=element;
   });
   return sum;
};

const multiply = function(list) {
    let num = 1;
    list.forEach(element => {
      num*=element;
    });
    return num;
};

const power = function(num,power) {
    return Math.pow(num, power);
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
  else{
    let facNum = 1;
    for(let i = num; i > 1; i--){
      facNum*= i;
    }
    return facNum;
  }
	
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
