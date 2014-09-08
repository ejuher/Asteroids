(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Game = Asteroids.Game = function () {
    this.asteroids = this.addAsteroids();
  };
  
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 10;
//
  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();
      asteroids.push(new Asteroids.Asteroid({pos: pos, game: this}));
    }
    
    return asteroids;
  };
  
  Game.prototype.randomPosition = function () {
    var randomX = Math.floor(Math.random() * Game.DIM_X);
    var randomY = Math.floor(Math.random() * Game.DIM_Y);

    return [randomX, randomY];
  };
  
  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, 500, 500);
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids[i].draw(ctx);
    }
  };
  
  
  Game.prototype.moveObjects = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids[i].move();
    }
  };
  
  
  Game.prototype.wrap = function (pos) {    
    if (pos[0] > 500) {
      pos[0] = 0;
    }
    if (pos[1] > 500) {
      pos[1] = 0;
    }
    
    return pos;
  };
  
  
  Game.prototype.checkCollisions = function () {
    
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      
      for (var j = 0; j < Game.NUM_ASTEROIDS; j++) {
        
        if (i != j && this.asteroids[i].isCollidedWith(this.asteroids[j])) {
            alert('COLLIDED!!!');
        }
        
      }
      
    }  
  };
  
  
  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  }
  
})();