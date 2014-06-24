
'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');
    this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'player');
    this.sprite.anchor.setTo(0.5, 0.5);
    
    this.titleText = this.game.add.bitmapText(220, 250, 'modern_led', 'Yet Another', 36);
    this.titleText2 = this.game.add.bitmapText(180, 330, 'modern_led', 'Space Shooter', 36);
    
    this.instructionsText = this.game.add.text(this.game.world.centerX, 520, 'Press SPACE or ENTER or click anywhere to play', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);
    this.instructionsText2 = this.game.add.text(this.game.world.centerX, 550, 'Use left and right arrow to move, space to shoot :)', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText2.anchor.setTo(0.5, 0.5);

    this.sprite.angle = -20;
    this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
    this.game.input.keyboard.addKeyCapture([
        Phaser.Keyboard.SPACEBAR
    ]);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed() || this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
        this.game.state.start('play');
    }
  }
};

module.exports = Menu;
