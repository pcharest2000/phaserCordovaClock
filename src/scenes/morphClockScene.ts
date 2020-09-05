import * as Phaser from "phaser";
import MyTime from "../objects/myTime";
import { FontPath } from "../objects/pathfont"
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "MorphClock"
};



export default class MophClockScene extends Phaser.Scene {
  private myTime: MyTime;
  private graphics: Phaser.GameObjects.Graphics;
  private fontPath: FontPath;
  private myTimer: Phaser.Time.TimerEvent;
  private count: number;
  private pointMorphSrc: Phaser.Math.Vector2[][];
  private pointMorphDst: Phaser.Math.Vector2[][];
  constructor() {
    super({ key: "MorphClockScene" });
    this.count = 0;
  }
  public myEvent() {

    //    this.drawDigitPath(this.count);
    //    this.transitionDropRain();
    this.count++;
    if (this.count > 9) {
      this.count = 0;
    }
  }
  public create() {
    this.fontPath = new FontPath();
    //this.graphics = new Phaser.GameObjects.Graphics(this);
    this.graphics = this.add.graphics();
    this.myTime = new MyTime();
    this.myTimer = this.time.addEvent({
      delay: 10000,
      callbackScope: this,
      callback: this.myEvent,
      loop: true
    })

    this.reshapeMorphPointsiArray(0, 1);
    this.tweenMorphSrc();
  }
  public drawSourcePoints() {
    let splines: Phaser.Curves.Spline[] = [];

    this.graphics.lineStyle(6, 0xff0000, 1);
    for (let i = 0; i < this.pointMorphSrc.length; i++) {
      splines.push(new Phaser.Curves.Spline(this.pointMorphSrc[i]))
    }
    for (let i = 0; i < this.pointMorphSrc.length; i++) {
      splines[i].draw(this.graphics, 128);
    }
  }
  public drawDigitPath2(digit: number) {
    let spline = new Phaser.Curves.Spline(this.fontPath.points[digit][0])
    this.graphics.lineStyle(2, 0xff0000, 1);
    this.graphics.fillStyle(0xff00ff);   // color: 0xRRGGBB
    spline.draw(this.graphics, 256);

  }
  public tweenMorph(digit1: number, digit2: number) {
    for (let j = 0; j < this.fontPath.points[digit1].length; j++) {
      for (let i = 0; i < this.fontPath.points[digit1][j].length; i++) {
        this.add.tween({
          targets: this.fontPath.points[digit1][j][i],
          x: this.fontPath.points[digit2][j][i].x,
          y: this.fontPath.points[digit2][j][i].y,
          // x: { start: this.fontPath.points[1][0][i].x, to: this.fontPath.points[1][0][i].x + Phaser.Math.Between(-50, 50) },
          // y: { start: this.fontPath.points[1][0][i].y, to: this.fontPath.points[1][0][i].y + Phaser.Math.Between(-50, 50) },
          repeat: -1,
          duration: 3000,//Phaser.Math.Between(2000, 4000),
          delay: 0,
          yoyo: true,
          ease: 'linear'
        })
      }
    }
  }
  public tweenMorphSrc() {
    for (let i = 0; i < this.pointMorphSrc.length; i++) {
      for (let j = 0; j < this.pointMorphSrc[i].length; j++) {
        this.add.tween({
          targets: this.pointMorphSrc[i][j],
          x: this.pointMorphDst[i][j].x,
          y: this.pointMorphDst[i][j].y,
          repeat: -1,
          duration: 3000,//Phaser.Math.Between(2000, 4000),
          yoyo: true,
          ease: 'linear',
          hold: 3000,
          delay: 3000
        })
      }
    }
  }
  public reshapeMorphPointsiArray(source: number, dest: number) {
    let srcDim = this.fontPath.points[source].length;
    let dstDim = this.fontPath.points[dest].length;

    if (srcDim == 1 && dstDim == 1) {
      this.pointMorphSrc = [...this.fontPath.points[source]]
      this.pointMorphDst = [...this.fontPath.points[dest]]
      return;
    }
    let srcDimLength: number[] = [];
    let dstDimLength: number[] = [];
    for (var i = 0; i < srcDim; i++)
      srcDimLength.push(this.fontPath.points[source][i].length)

    for (var i = 0; i < dstDim; i++)
      dstDimLength.push(this.fontPath.points[dest][i].length)
    console.log("sourceDim " + srcDim);
    console.log(srcDimLength);
    console.log("destDim " + dstDim)
    console.log(dstDimLength);


    this.pointMorphSrc = [];
    this.pointMorphDst = [];

    let morphIndexi = 0;
    let morphIndexj = 0;
    let lengthIndex = 0;
    // Here we copy the src data into the reshape morphArray
    //we must reshape the src to dst shape
    if (srcDim > dstDim) {
      this.pointMorphSrc = [...this.fontPath.points[source]]
      for (var j = 0; j < srcDimLength.length; j++) {
        this.pointMorphDst[j] = []
        for (var i = 0; i < srcDimLength[j]; i++) {
          this.pointMorphDst[j][i] = new Phaser.Math.Vector2();
          this.pointMorphDst[j][i].x = this.fontPath.points[dest][morphIndexj][morphIndexi].x;
          this.pointMorphDst[j][i].y = this.fontPath.points[dest][morphIndexj][morphIndexi].y;
          morphIndexi++;
          if (morphIndexi >= dstDimLength[lengthIndex]) {
            morphIndexi = 0;
            morphIndexj++;
            lengthIndex++;
          }
        }
      }
    }

  }
  public update(time, delta) {
    this.graphics.clear()

    //    this.drawDigitPath2(3);
    this.drawSourcePoints();
  }
}
