
export default interface IGameObject {

    // setPosition(x: number, y: number): void;

    setPosition(point: Phaser.Geom.Point): void;

    get Heigth(): number;

    get Width(): number;

    create(): void;
    // update(): void;
    preload(): void;
}
