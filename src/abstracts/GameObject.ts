import IGameObject from "./IGameObject";


export default class GameObject implements IGameObject {
    private position: Phaser.Geom.Point;

    constructor(position: Phaser.Geom.Point = new Phaser.Geom.Point(0, 0)) {
        this.position = position;
    }

    public setPosition(point: Phaser.Geom.Point): void
    {
        this.position = point;
    }
}