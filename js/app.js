var gameName = gameName || {};

//require game states
gameName.BootState = require('./states/Boot.js');
gameName.PreloadState = require('./states/Preload.js');
gameName.MenuState = require('./states/Menu.js');
gameName.GameState = require('./states/Game.js');

gameName.game = new Phaser.Game(1920, 1080, Phaser.AUTO);

gameName.game.state.add('Boot', gameName.BootState);
gameName.game.state.add('Preload', gameName.PreloadState);
gameName.game.state.add('Game', gameName.GameState);
gameName.game.state.add('Menu', gameName.MenuState);

gameName.game.state.start('Boot');
