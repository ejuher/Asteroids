(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject;
  
  var Asteroid = Asteroids.Asteroid = function (position) {
    var COLOR = "#FE2EF7";
    var RADIUS = 10;
  
    vel = Asteroids.Util.randomVec(5);
    
    var hashArgs = {pos: position["pos"], vel: vel, radius: RADIUS, color: COLOR};
    
    MovingObject.call(this, hashArgs);
  };
  
  Asteroids.Util.inherits(MovingObject, Asteroid);
  
})();