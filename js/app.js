var gameName = gameName || {};

gameName.game = new Phaser.Game(1920, 1080, Phaser.AUTO);

gameName.game.state.add('Boot', gameName.BootState);
gameName.game.state.add('Preload', gameName.PreloadState);
gameName.game.state.add('Game', gameName.GameState);
gameName.game.state.add('Menu', gameName.MenuState);

gameName.game.state.start('Boot');
