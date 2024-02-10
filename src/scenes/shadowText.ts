import '../assets/styles.css'
import GameObject from '../abstracts/GameObject';

export default class ShadowText extends GameObject {
    
    private scene: Phaser.Scene;

    private textStr: string;
    private text: Phaser.GameObjects.Text;
    private shadow: Phaser.GameObjects.Text;

    private fontSize: number;

    constructor(
        scene: Phaser.Scene,
        position: Phaser.Geom.Point,
        text: string,
        fontSize: number) {
        super(position);
        this.textStr = text;
        this.scene = scene;
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

    public get Heigth(): number {

        let textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
            fontFamily: "Command",
            fontSize: this.fontSize,
            color: "#ffffff"
        };

        let h = this.scene.make.text({
            x: this.position.x,
            y: this.position.y,
            text: "",
            style: textStyle,
        }).height;

        return this.text?.height ?? h;
    }
    
    public get Width(): number {
        return this.text.width;
    }
}
