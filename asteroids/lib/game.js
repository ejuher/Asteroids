(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Game = Asteroids.Game = function () {
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship({game: this});
  };
  
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 10;
//
  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var pos = Game.randomPosition();
      asteroids.push(new Asteroids.Asteroid({pos: pos, game: this}));
    }
    
    return asteroids;
  };
  
  Game.randomPosition = function () {
    var randomX = Math.floor(Math.random() * Game.DIM_X);
    var randomY = Math.floor(Math.random() * Game.DIM_Y);

    return [randomX, randomY];
  };
  
  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, 500, 500);
    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].draw(ctx);
    }
  };  
  
  Game.prototype.moveObjects = function () {
    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].move();
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
    // check ship / asteroid collisions
    // check bullet / asteroid collisions
    var collidedPairs = [];
    
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = 0; j < this.allObjects().length; j++) {  
        if (i != j && this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          
          collidedPairs.push( [this.allObjects()[i], this.allObjects()[j]] );
          //push into array
        } 
      }
    }  
    
    for (var i = 0; i < collidedPairs.length; i++) {
      collidedPairs[i][0].collideWith(collidedPairs[i][1]);
    }
    //iterate thru array and do collisions
  };
  
  Game.prototype.remove = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  }
  
  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  }
  
  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]);
  };
  
})();