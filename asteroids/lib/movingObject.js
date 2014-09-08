(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function (hashArgs) {
    this.pos = hashArgs["pos"];
    this.vel = hashArgs["vel"];
    this.radius = hashArgs["radius"];
    this.color = hashArgs["color"];
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
  }
  
})();