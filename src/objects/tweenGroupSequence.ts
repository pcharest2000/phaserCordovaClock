import * as Phaser from "phaser";
export default class TweenGroupSquence {
    private tweens1: Phaser.Tweens.Tween[];
    private tweens2: Phaser.Tweens.Tween[];
    private scene: Phaser.Scene;
    private totalTweens1: number;
    private tweensDone1: number;
    private totalTweens2: number;
    private tweensDone2: number;
    private resetPositions: boolean;
    constructor(scene: Phaser.Scene, groupOne: Phaser.Tweens.Tween[], groupTwo: Phaser.Tweens.Tween[],resetPositions?:boolean) {
      if(resetPositions==undefined){
          this.resetPositions=false;

      }
        else
            this.resetPositions=resetPositions;
        this.scene = scene
        this.tweens1 = groupOne;
        this.tweens2 = groupTwo;
        this.totalTweens1 = this.tweens1.length;
        this.tweensDone1 = 0;
        this.totalTweens2 = this.tweens2.length;
        this.tweensDone2 = 0;
        for (var i = 0; i < this.tweens1.length; i++) {
            this.tweens1[i].on('complete', this.areDone1, this);
            this.tweens1[i].play();
        }
    }

    // public add(config: object | Phaser.Types.Tweens.TweenBuilderConfig) {
    //     var tween: Phaser.Tweens.Tween = this.scene.add.tween(config);
    //     this.totalTweens1 = this.tweens.push(tween1);
    //     tween.on('complete', this.areDone, this)
    // }
    public areDone1(): boolean {
        this.tweensDone1++;
        if (this.tweensDone1 == this.totalTweens1) {
            for (var i = 0; i < this.tweens1.length; i++) {
                this.tweens1[i].remove();
            }
            this.tweens1 = [];
            this.startGroupe2();
        }
        // var a =sthis.getAleenswlTweens();
        // console.log(a);
        return true;
    }
    public areDone2(): boolean {
        this.tweensDone2++;
        if (this.tweensDone2 == this.totalTweens2) {
            for (var i = 0; i < this.tweens2.length; i++) {
                this.tweens2[i].remove();
            }
            this.tweens2 = [];
        }
        // var a =sthis.getAleenswlTweens();
        // console.log(a);
        return true;
    }
public startGroupe2(){

        for (var i = 0; i < this.tweens2.length; i++) {
            this.tweens2[i].on('complete', this.areDone2, this);
            this.tweens2[i].play();
        }
    }

}
