import 'phaser';
class PlayGame extends Phaser.Scene {
    image: Phaser.GameObjects.Image;

    graphics: Phaser.GameObjects.Graphics;

    gameMetrix: number[][];;
    
    constructor() {
        super("PlayGame");
    }

    preload(): void {

        this.gameMetrix = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
    }

    create(): void {

        this.graphics = this.add.graphics({ fillStyle: { color: 0xf0fefe } });
        let rectangle = new Phaser.Geom.Rectangle(0, 0, 30, 30);
        this.graphics.fillRectShape(rectangle);
        for (let row = 0; row == this.gameMetrix.length; row++) {
            for (let col = 0; col = this.gameMetrix[row].length; col++) {

                let rectangle = new Phaser.Geom.Rectangle(32 * col, 32 * row, 30, 30);
                this.graphics.fillRectShape(rectangle);
            }
        }
    }

    update(): void {

        for (let row = 0; row == this.gameMetrix.length; row++) {
            for (let col = 0; col = this.gameMetrix[row].length; col++) {

                let rectangle = new Phaser.Geom.Rectangle(32 * col, 32 * row, 30, 30);
                this.graphics.fillRectShape(rectangle);
            }
        }
    }
}

let configObject: Phaser.Types.Core.GameConfig = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'thegame',
        width: 800,
        height: 600
    },
    scene: PlayGame
};

new Phaser.Game(configObject);
