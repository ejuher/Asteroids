var sum = function () {
  
  var sum = 0;
  var passedStuff = Array.prototype.slice.call(arguments);
  
  
  for (var i = 0; i < passedStuff.length; i++) {
    sum += passedStuff[i];
  }
  
  return sum;
};

console.log(sum(1, 2, 3, 4, 5));


Function.prototype.myBind = function (obj) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 1);
  
  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    // console.log(args2);
    return fn.apply(obj, args.concat(args2));
  }
};


obj = {
  name: "Earl Watts"
};

function greet(msg1, msg2) {
  console.log(msg1 + ": " + this.name);
  console.log(msg2 + ": " + this.name);
  return "not undefined :)"
}

var f = greet.myBind(obj, "hello");


console.log(f("goodbye"));