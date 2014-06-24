'use strict';

var Bullet = function(game, id) {
    Phaser.Sprite.call(this, game, 0, 0, id);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true; 
    this.collideWorldBounds = true; 
    this.kill();  
};

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
};

module.exports = Bullet;
