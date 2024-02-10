import 'phaser'
import ShadowText from './shadowText';
import GameObbject from '../abstracts/GameObject';

export default class MainMenu extends GameObbject {

    private scene: Phaser.Scene;
    private name: string;

    private headerFontSize: number;
    private header: ShadowText;

    private items: ShadowText[];

    private itemMargin: number;
    private itemPadding: number;

    constructor(scene: Phaser.Scene, header: string) {
        super();
        this.scene = scene;
        this.name = header;
        this.headerFontSize = 48;
        this.items = [];
        this.itemMargin = -7;
        this.itemPadding = 7;
        this.header = new ShadowText(
            scene,
            new Phaser.Geom.Point(10, 10),
            header,
            this.headerFontSize
        );
    }

    preload(): void {
        this.header.preload();

        this.items.push(
            new ShadowText(
                this.scene,
                new Phaser.Geom.Point(
                    10,
                    10 + this.itemPadding + (this.header.getHeigth() + this.itemMargin)),
                "Start",
                36
            ));

        this.items.push(
            new ShadowText(
                this.scene,
                new Phaser.Geom.Point(
                    10,
                    10 + this.itemPadding + 2 * (this.header.getHeigth() + this.itemMargin)),
                "options",
                36
            ));

        this.items.forEach((item) => { item.preload(); });

        //TODO: need to load the assets
        //sthis.keys = this.input.keyboard.createCursorKeys();
    }

    create(): void {

        this.header.create();
        this.items.forEach((item) => { item.create(); });

        // TODO: need to create the main menu


    }

    update(): void {
        // TODO: need to update the main menu

    }
}
