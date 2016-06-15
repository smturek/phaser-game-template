module.exports = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(100, 1);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('startButton', 'assets/start.png');
    },
    create: function() {
        this.state.start('Menu');
    }
};
