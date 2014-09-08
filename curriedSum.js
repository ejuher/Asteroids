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

