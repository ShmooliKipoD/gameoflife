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
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 0
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
    }

    create(): void {

        this.graphics = this.add.graphics({ fillStyle: { color: 0xf0fefe } });
        
    }

    update(): void {

        this.updateGameMetrix();
        
        // console.log("update"  );
        for (let row = 0; row < this.gameMetrix.length; row++) {
            // console.log("row: " + row );

            for (let col = 0; col < this.gameMetrix[row].length; col++) {
                //console.log("row: " + row + " col: " + col);
                if (this.gameMetrix[row][col] == 1) {
                    let rectangle = new Phaser.Geom.Rectangle(32 * col, 32 * row, 30, 30);
                    this.graphics.fillRectShape(rectangle);
                }
            }
        }
    }

    updateGameMetrix() {
        for (let row = 0; row < this.gameMetrix.length; row++) {
            for (let col = 0; col < this.gameMetrix[row].length; col++) {
                if (this.gameMetrix[row][col] == 1) {
                    this.gameMetrix[row][col] = this.shouldSurvives(row, col);
                } else {
                    this.gameMetrix[row][col] = this.souldBorn(row, col);
                }
            }
        }
    }
    
    souldBorn(row: number, col: number): number {
        let liveNeighbours = this.livingNeighbours(row, col);

        if (liveNeighbours == 3) {
            return 1;
        } else {
            return 0;
        }
    }

    shouldSurvives(row: number, col: number): number {
        let liveNeighbours = this.livingNeighbours(row, col);

        if (liveNeighbours == 2 || liveNeighbours == 3) {
            return 1;
        } else {
            return 0;
        }
    }

    livingNeighbours(row: number, col: number): number {
        let liveNeighbours = 0;
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (r >= 0 && r < this.gameMetrix.length && c >= 0 && c < this.gameMetrix[r].length) {
                    if (r != row || c != col) {
                        if (this.gameMetrix[r][c] == 1) {
                            liveNeighbours++;
                        }
                    }
                }
            }
        }
        return liveNeighbours;
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
