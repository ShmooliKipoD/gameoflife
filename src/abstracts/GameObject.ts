import IGameObject from "./IGameObject";

export default abstract class GameObject implements IGameObject {
    private _position: Phaser.Geom.Point;

    constructor(position: Phaser.Geom.Point = new Phaser.Geom.Point(0, 0)) {
        this._position = position;
    }
    abstract create(): void;
    abstract preload(): void;
    
    abstract get Heigth(): number;
    abstract get Width(): number;

    get position(): Phaser.Geom.Point {
        return this._position;
    } 

    public setPosition(point: Phaser.Geom.Point): void
    {
        this._position = point;
    }
}