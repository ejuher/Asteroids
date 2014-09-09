(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject;
  
  var Asteroid = Asteroids.Asteroid = function (asteroidArgs) {
    var COLOR = "#FE2EF7";
    var RADIUS = 10;
  
    var vel = Asteroids.Util.randomVec(5);
    
    var hashArgs = {
      pos: asteroidArgs["pos"], 
      game: asteroidArgs["game"], 
      vel: vel, 
      radius: RADIUS, 
      color: COLOR
    };
    
    MovingObject.call(this, hashArgs);
  };
  
  Asteroids.Util.inherits(MovingObject, Asteroid);
  
})();