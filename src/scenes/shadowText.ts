import '../assets/styles.css'

export default class ShadowText {

    private scene: Phaser.Scene;

    private textStr: string;
    private text: Phaser.GameObjects.Text;
    private shadow: Phaser.GameObjects.Text;

    private position: Phaser.Geom.Point;
    private fontSize: number;

    constructor(
        scene: Phaser.Scene,
        position: Phaser.Geom.Point,
        text: string,
        fontSize: number) {
        
        this.textStr = text;
        this.scene = scene;
        this.position = position;
        this.fontSize = fontSize;
    }

    public preload(): void {
        let textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
            fontFamily: "Command",
            fontSize: this.fontSize,
            color: "#ffffff"
        };

        this.shadow = this.scene.make.text({
            x: this.position.x + 2,
            y: this.position.y + 2,
            text: this.textStr,
            style: textStyle,
        });

        this.shadow.setFill("#888888");

        this.text = this.scene.make.text({
            x: this.position.x,
            y: this.position.y,
            text: this.textStr,
            style: textStyle,
        });
    }

    public create(): void {

        
    }

    public getHeigth(): number {
        return this.text.height;
    }

    public getWidth(): number {
        return this.text.width;
    }
}