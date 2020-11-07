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
  private myTimer: Phaser.Time.TimerEvent;
  private count: number;

  private srcPathHourTenth: FontPath;
  private dstPathHourTenth: FontPath;
  private srcPathHourDigit: FontPath;
  private dstPathHourDigit: FontPath;
  private srcPathMinutesTenth: FontPath;
  private dstPathMinutesTenth: FontPath;
  private srcPathMinutesDigit: FontPath;
  private dstPathMinutesDigit: FontPath;

  constructor() {
    super({ key: "MorphClockScene" });
    this.count = 0;
  }
  public myEvent() {
    let tmp = this.count;
    this.count++;
    if (this.count > 9) {
      this.count = 0;
    }
    // this.srcPathHourDigit = new FontPath(this, tmp, 500, 0)
    // this.dstPathHourDigit = new FontPath(this, this.count, 500, 0)
    // this.tweenMorphSrc2(this.srcPathHourDigit, this.dstPathHourDigit);
    //this.tweenMorphSrc(tmp, this.count, 130, 30);
    // this.tweenMorphSrc(tmp, this.count, 0, 90);
  }
  public create() {
    this.myTime = new MyTime();
    this.srcPathHourTenth = new FontPath(this, this.myTime.currentHourTenth, 0, 0,0.25)
    this.dstPathHourTenth = new FontPath(this, this.myTime.currentHourTenth, 0, 0,0.25)
    this.srcPathHourDigit = new FontPath(this, this.myTime.currentHourDigit, 1 * FontPath.maxWidth, 0,0.25)
    this.dstPathHourDigit = new FontPath(this, this.myTime.currentHourDigit, 1 * FontPath.maxWidth, 0,0.25)
    this.srcPathMinutesTenth = new FontPath(this, this.myTime.currentMinuteTenth, 2 * FontPath.maxWidth, 0,0.25)
    this.dstPathMinutesTenth = new FontPath(this, this.myTime.currentMinuteTenth, 2 * FontPath.maxWidth, 0,0.25)
    this.srcPathMinutesDigit = new FontPath(this, this.myTime.currentMinuteDigit, 3 * FontPath.maxWidth, 0,0.25)
    this.dstPathMinutesDigit = new FontPath(this, this.myTime.currentMinuteDigit, 3 * FontPath.maxWidth, 0,0.25)
    this.myTimer = this.time.addEvent({
      delay: 5000,
      callbackScope: this,
      callback: this.myEvent,
      loop: true
    })
    console.log(FontPath.maxWidth);
  }
  public tweenMorphSrc(srcDigit: number, dstDigit: number, x: number, y: number) {
    this.srcPathHourTenth = new FontPath(this, srcDigit, x, y,0.25);
    this.dstPathHourTenth = new FontPath(this, dstDigit, x, y,0.25);
    if (this.srcPathHourTenth.numPath < this.dstPathHourTenth.numPath) {
      for (let i = 0; i < this.srcPathHourTenth.numPath; i++) {
        for (let j = 0; j < this.srcPathHourTenth.points[i].length; j++) {
          this.add.tween({
            targets: this.srcPathHourTenth.points[i][j],
            x: this.dstPathHourTenth.points[i][j].x,
            y: this.dstPathHourTenth.points[i][j].y,
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
      for (let i = this.srcPathHourTenth.numPath; i < this.dstPathHourTenth.numPath; i++) {
        this.srcPathHourTenth.numPath = this.dstPathHourTenth.numPath;
        this.srcPathHourTenth.points[i] = this.dstPathHourTenth.points[i];
        this.srcPathHourTenth.pointsCenters[i] = this.dstPathHourTenth.pointsCenters[i];
        for (let j = 0; j < this.dstPathHourTenth.points[i].length; j++) {
          this.add.tween({
            targets: this.srcPathHourTenth.points[i][j],
            x: { start: this.srcPathHourTenth.pointsCenters[i].x, to: this.srcPathHourTenth.points[i][j].x },
            y: { start: this.srcPathHourTenth.pointsCenters[i].y, to: this.srcPathHourTenth.points[i][j].y },
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
      return;
    }
    if (this.srcPathHourTenth.numPath > this.dstPathHourTenth.numPath) {
      for (let i = 0; i < this.dstPathHourTenth.numPath; i++) {
        for (let j = 0; j < this.srcPathHourTenth.points[i].length; j++) {
          this.add.tween({
            targets: this.srcPathHourTenth.points[i][j],
            x: this.dstPathHourTenth.points[i][j].x,
            y: this.dstPathHourTenth.points[i][j].y,
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
      for (let i = this.dstPathHourTenth.numPath; i < this.srcPathHourTenth.numPath; i++) {
        for (let j = 0; j < this.srcPathHourTenth.points[i].length; j++) {
          this.add.tween({
            targets: this.srcPathHourTenth.points[i][j],
            x: this.srcPathHourTenth.pointsCenters[i].x,
            y: this.srcPathHourTenth.pointsCenters[i].y,
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
      return;
    }
    if (this.srcPathHourTenth.numPath == this.dstPathHourTenth.numPath) {
      for (let i = 0; i < this.srcPathHourTenth.numPath; i++) {
        for (let j = 0; j < this.srcPathHourTenth.points[i].length; j++) {
          this.add.tween({
            targets: this.srcPathHourTenth.points[i][j],
            x: this.dstPathHourTenth.points[i][j].x,
            y: this.dstPathHourTenth.points[i][j].y,
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
    }
    return;
  }

  public tweenMorphSrc2(srcPath: FontPath, dstPath: FontPath) {
    if (srcPath.numPath < dstPath.numPath) {
      for (let i = 0; i < srcPath.numPath; i++) {
        for (let j = 0; j < srcPath.points[i].length; j++) {
          this.add.tween({
            targets: srcPath.points[i][j],
            x: dstPath.points[i][j].x,
            y: dstPath.points[i][j].y,
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
      for (let i = srcPath.numPath; i < dstPath.numPath; i++) {
        srcPath.numPath = dstPath.numPath;
        srcPath.points[i] = dstPath.points[i];
        srcPath.pointsCenters[i] = dstPath.pointsCenters[i];
        for (let j = 0; j < dstPath.points[i].length; j++) {
          this.add.tween({
            targets: srcPath.points[i][j],
            x: { start: srcPath.pointsCenters[i].x, to: srcPath.points[i][j].x },
            y: { start: srcPath.pointsCenters[i].y, to: srcPath.points[i][j].y },
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
      return;
    }
    if (srcPath.numPath > dstPath.numPath) {
      for (let i = 0; i < dstPath.numPath; i++) {
        for (let j = 0; j < srcPath.points[i].length; j++) {
          this.add.tween({
            targets: srcPath.points[i][j],
            x: dstPath.points[i][j].x,
            y: dstPath.points[i][j].y,
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
      for (let i = dstPath.numPath; i < srcPath.numPath; i++) {
        for (let j = 0; j < srcPath.points[i].length; j++) {
          this.add.tween({
            targets: srcPath.points[i][j],
            x: srcPath.pointsCenters[i].x,
            y: srcPath.pointsCenters[i].y,
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
      return;
    }
    if (srcPath.numPath == dstPath.numPath) {
      for (let i = 0; i < srcPath.numPath; i++) {
        for (let j = 0; j < srcPath.points[i].length; j++) {
          this.add.tween({
            targets: srcPath.points[i][j],
            x: dstPath.points[i][j].x,
            y: dstPath.points[i][j].y,
            repeat: 0,
            duration: 1200,//Phaser.Math.Between(2000, 4000),
            yoyo: false,
            ease: 'linear',
            delay: 0
          })
        }
      }
    }
    return;
  }

  public draw() {
    FontPath.graphics.clear()

    this.srcPathHourTenth.draw();
    this.srcPathHourDigit.draw();
    this.srcPathMinutesTenth.draw();
    this.srcPathMinutesDigit.draw();
  }
  public update(time, delta) {
    this.draw();
  }
}
