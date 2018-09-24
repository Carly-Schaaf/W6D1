function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(int) {
    numbers.push(int);
    if (numbers.length === numArgs) {
      let sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      };
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const sum = curriedSum(4)
// console.log(sum(5)(30)(20)(1))


Function.prototype.mycurry = function(numArgs) {
  const numbers = [];
  const method = this;

  function _curriedSum(int) {
    numbers.push(int);
    if (numbers.length === numArgs) {
      return method.apply(null, numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.mysplatcurry = function(numArgs) {
  const numbers = [];
  const method = this;

  function _curriedSum(int) {
    numbers.push(int);
    if (numbers.length === numArgs) {
      return method(...numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// console.log(sumThree.mysplatcurry(3)(4)(20)(6))
