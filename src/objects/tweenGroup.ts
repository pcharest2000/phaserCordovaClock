import * as Phaser from "phaser";
export default class TweenGroup {
    private tweens: Phaser.Tweens.Tween[];
    private scene: Phaser.Scene;
    private totalTweens: number;
    private tweensDone: number;
    constructor(scene: Phaser.Scene) {
        this.scene = scene
        this.tweens = [];
        this.totalTweens = 0;
        this.tweensDone = 0;
    }

    public add(config: object | Phaser.Types.Tweens.TweenBuilderConfig) {
        var tween: Phaser.Tweens.Tween = this.scene.add.tween(config);
        this.totalTweens = this.tweens.push(tween);
        tween.on('complete', this.areDone, this)
    }
    public areDone(): boolean {
        this.tweensDone++;
        console.log(this.tweensDone);
        console.log(this.scene.tweens.getAllTweens());
        if (this.tweensDone == this.totalTweens) {
            console.log("All tweens Done!!!")
            for (var i = 0; i < this.tweens.length; i++) {
                this.tweens[i].remove();
            }
            this.tweens = [];
        }
        // var a =sthis.getAleenswlTweens();
        // console.log(a);
        return true;
    }
}
