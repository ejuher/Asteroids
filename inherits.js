Function.prototype.inherits = function (Parent) {
  function Surrogate () {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
};

function MovingObject () {};

MovingObject.prototype.forward = function () {
  console.log('forward!');
};

function Ship () {};
Ship.inherits(MovingObject);

Ship.prototype.fire = function () {
  console.log('FIRE!');
};

function Asteroid () {};
Asteroid.inherits(MovingObject);

var ship = new Ship();

ship.forward();
ship.fire();

var asteroid = new Asteroid();
asteroid.forward();
// asteroid.fire(); THIS SHOULD FAIL
