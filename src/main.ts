import 'phaser';
import WellcomeScene from './scenes/wellcome';

let configObject: Phaser.Types.Core.GameConfig = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'thegame',
        width: 800,
        height: 600
    },
    scene: WellcomeScene
};

new Phaser.Game(configObject);
