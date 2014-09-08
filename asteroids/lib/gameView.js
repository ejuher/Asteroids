(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var GameView = Asteroids.GameView = function (canvasEl, game) {
    this.game = game;
    this.ctx = canvasEl.getContext("2d");
  };
  
  GameView.prototype.start = function () {
    window.setInterval((function () {
      // this.game.moveObjects();
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  }
})();