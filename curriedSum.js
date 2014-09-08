function curriedSum (numArgs) {
  var numbers = [];

  return function _curriedSum (number) {

    if (numbers.length < numArgs) {
      numbers.push(number)
    }

    if (numbers.length == numArgs) {
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];

      }

      return sum;
    } else {
      return _curriedSum;
    }
  };
};

var sum = curriedSum(4);
console.log(sum(3)(1)(2)(3));


Function.prototype.curry = function (numArgs) {
  fn = this;
  var args = [];
  
  return function reCurry (arg) {
    
    if (args.length < numArgs) {
      args.push(arg);
      return reCurry;
    } 
      
    return fn.apply(undefined, args);
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6);
console.log(' ');
console.log(result());
console.log(' ');
