(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function (hashArgs) {
    this.pos = hashArgs["pos"];
    this.vel = hashArgs["vel"];
    this.radius = hashArgs["radius"];
    this.color = hashArgs["color"];
    this.game = hashArgs["game"];
    
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
    var xElement = this.pos[0] - otherObject.pos[0]; 
    var xSquared = xElement * xElement;
    var yElement = this.pos[1] - otherObject.pos[1];
    var ySquared = yElement * yElement;
    
    var distance = Math.sqrt(xSquared + ySquared);
    var radiusSum = this.radius + otherObject.radius
    
    if (distance <= radiusSum) {
      return true;
    }
    
    return false;
  };
  
  
})();