module.exports = {
    create: function() {
        var titleTextStyle = {font: '100px Arial', fill: '#FFFFFF', align: 'center'};
        this.titleText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 100, '????', titleTextStyle);
        this.titleText.anchor.set(0.5);

        this.startButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 200, 'startButton', this.startGame, this);
        this.startButton.anchor.set(0.5);
    },
    startGame: function() {
                this.state.start('Game');
    }
};
