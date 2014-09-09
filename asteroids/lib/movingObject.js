(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
    this.game = options["game"];
    
  }; 
  
  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    
    // console.log('drawing moving object')
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );
    
    ctx.fill();
  };
  
  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel;
    this.pos[1] += this.vel;

    // console.log(this.pos);
    // console.log(Asteroids.Game.asteroids);
    this.pos = this.game.wrap(this.pos);
  };
  
  MovingObject.prototype.isCollidedWith = function (otherObject) {    
    var xSquared = Math.pow(this.pos[0] - otherObject.pos[0], 2);
    // var xSquared = xElement * xElement;
    var yElement = this.pos[1] - otherObject.pos[1];
    var ySquared = yElement * yElement;
    
    var distance = Math.sqrt(xSquared + ySquared);
    var radiusSum = this.radius + otherObject.radius
    
    if (distance <= radiusSum) {
      return true;
    }
    
    return false;
  };
  
  MovingObject.prototype.collideWith = function (otherObject) {
    if (this.constructor === Ship || otherObject.constructor === Ship) {
      if (this.constructor === Ship) {
        this.game.remove(otherObject);
        this.pos = Asteroids.Game.randomPosition();
      } else {
        this.game.remove(this)
        otherObject.pos = Asteroids.Game.randomPosition();
      }
    }
  };
  
})();