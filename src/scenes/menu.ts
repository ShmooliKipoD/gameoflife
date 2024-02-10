import 'phaser'
import ShadowText from './shadowText';
import GameObbject from '../abstracts/GameObject';

export default class Menu extends GameObbject {
    
    private scene: Phaser.Scene;

    private headerFontSize: number;
    private header: ShadowText;

    private items: ShadowText[];

    private itemMargin: number;
    private itemPadding: number;

    constructor(
        scene: Phaser.Scene,
        header: string,
        position: Phaser.Geom.Point) {
        super(position);
        
        this.scene = scene;
        this.headerFontSize = 48;
        this.items = [];
        this.itemMargin = 0;
        this.itemPadding = -2;
        this.header = new ShadowText(
            scene,
            this.position,
            header,
            this.headerFontSize
        );
    }

    public preload(): void {
        this.header.preload();
        this.items.forEach((item) => { item.preload(); });

        //TODO: need to load the assets
        //sthis.keys = this.input.keyboard.createCursorKeys();
    }

    public create(): void {

        this.header.create();
        this.items.forEach((item) => { item.create(); });

        // TODO: need to create the main menu


    }

    public update(): void {
        // TODO: need to update the main menu

    }

    /**
     * Adds an item to the menu.
     * @param text - The text of the item.
     */
    public addItem(text: string): void {
        this.items.push(
            new ShadowText(
                this.scene,
                new Phaser.Geom.Point(
                    this.position.x,
                    this.position.y + this.header.Heigth + this.itemPadding + (this.items.length > 0 ? this.items.length * (this.items[0].Heigth + this.itemMargin) : 0 )),
                text,
                36
            ));
    }

    public get Heigth(): number {
        //TODO: need to calculate the height of the menu
        //throw new Error('Method not implemented.');
        return 0;
    }

    public get Width(): number {
        //TODO: need to calculate the width of the menu
        //throw new Error('Method not implemented.');
        return 0;
    }
}
