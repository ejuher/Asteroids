(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  // window.Asteroids.Util = {};
 //  var Util = window.Asteroids.Util;
 // sub-namespacing
  
  var Util = window.Asteroids.Util = {};
  
  Util.inherits = function (parentClass, childClass) {
    function Surrogate () {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };
  
  Util.randomVec = function (length) {
    return Math.random() * length;
  };
  
})();

