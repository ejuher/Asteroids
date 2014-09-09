( function () {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject;
  
  var Ship = Asteroids.Ship = function (shipArgs) {
    var vel = 0;
    var pos = [250, 250];

    
    var hashArgs = {
      pos: pos, 
      game: shipArgs["game"], 
      vel: vel, 
      radius: Ship.RADIUS, 
      color: Ship.COLOR
    };
    
    MovingObject.call(this, hashArgs);
  };
  
  Asteroids.Util.inherits(MovingObject, Ship);
  
  Ship.RADIUS = 20;
  Ship.COLOR = "#00FFFF";
  
})();