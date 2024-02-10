import 'phaser';
import MainMenu from './scenes/mainMenu';


class PlayGame extends Phaser.Scene {
    image: Phaser.GameObjects.Image;

    graphics: Phaser.GameObjects.Graphics;

    menu: MainMenu;

    gameMetrix: number[][];
    
    constructor() {
        super("PlayGame");
        this.menu = new MainMenu(this, "Game of Life");
    }

    preload(): void {
        this.menu.preload();
        // lk
        this.gameMetrix = [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], // 0
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        ];
    }

    create(): void {

        this.graphics = this.add.graphics({ fillStyle: { color: 0xf0fefe } });
        this.menu.create();
        //this.add.text(10, 10, "Game of Life", { font: "48px Verdana" }).setFill("#555555");

        this.time.addEvent({ delay: 200, loop: true, callback: () => {

            this.updateGameMetrix();

        }});
        
    }

    update(): void {
        this.graphics.clear();
        //this.updateGameMetrix();
        
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
        let result: number[][] = this.gameMetrix.map(row => [...row]);

        for (let row = 0; row < this.gameMetrix.length; row++) {
            for (let col = 0; col < this.gameMetrix[row].length; col++) {
                if (this.gameMetrix[row][col] == 1) {
                    result[row][col] = this.shouldSurvives(row, col);
                } else {
                    result[row][col] = this.souldBorn(row, col);
                }
            }
        }
        this.gameMetrix = result.map(row => [...row]);;
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
                if (r >= 0 &&
                    r < this.gameMetrix.length &&
                    c >= 0 &&
                    c < this.gameMetrix[r].length) {
                    if (r != row || c != col) {
                        if (this.gameMetrix[r][c] == 1) {
                            liveNeighbours++;
                        }
                    }
                }
            }
        }
        // console.log("row: " + row + " col: " + col + " liveNeighbours: " + liveNeighbours);
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
