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

  private srcPathHourTenth: FontPath;
  private dstPathHourTenth: FontPath;
  private srcPathHourDigit: FontPath;
  private dstPathHourDigit: FontPath;
  private srcPathMinutesTenth: FontPath;
  private dstPathMinutesTenth: FontPath;
  private srcPathMinutesDigit: FontPath;
  private dstPathMinutesDigit: FontPath;

  private vertPos:number = 0;
  constructor() {
    super({ key: "MorphClockScene" });
  }
  public create() {
    this.myTime = new MyTime();
    this.srcPathHourTenth = new FontPath(this, this.myTime.currentHourTenth, 0, this.vertPos, 0.25)
    this.vertPos = (this.sys.canvas.height-this.srcPathHourTenth.scaledHeightPixels)-2;
    this.srcPathHourTenth = new FontPath(this, this.myTime.currentHourTenth, 0, this.vertPos, 0.25)
    this.dstPathHourTenth = new FontPath(this, this.myTime.currentHourTenth, 0, 0, 0.25)
    this.srcPathHourDigit = new FontPath(this, this.myTime.currentHourDigit, 1 * this.srcPathHourTenth.scaledWidthPixels, this.vertPos, 0.25)
    this.dstPathHourDigit = new FontPath(this, this.myTime.currentHourDigit, 1 * this.srcPathHourTenth.scaledWidthPixels, this.vertPos, 0.25)
    this.srcPathMinutesTenth = new FontPath(this, this.myTime.currentMinuteTenth, 2 * this.srcPathHourDigit.scaledWidthPixels, this.vertPos, 0.25)
    this.dstPathMinutesTenth = new FontPath(this, this.myTime.currentMinuteTenth, 2 * this.srcPathHourDigit.scaledWidthPixels, this.vertPos, 0.25)
    this.srcPathMinutesDigit = new FontPath(this, this.myTime.currentMinuteDigit, 3 * this.srcPathMinutesTenth.scaledWidthPixels, this.vertPos, 0.25)
    this.dstPathMinutesDigit = new FontPath(this, this.myTime.currentMinuteDigit, 3 * this.srcPathMinutesTenth.scaledWidthPixels, this.vertPos, 0.25)
    this.vertPos = (this.sys.canvas.height-this.srcPathHourTenth.scaledHeightPixels)-2;

  }
  public tweenMorphSrc(srcPath: FontPath, dstPath: FontPath) {
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
  public update() {
    this.draw();

    if (this.myTime.timeChanged()) {
      console.log("Hello");
      this.dstPathHourTenth = new FontPath(this, this.myTime.currentHourTenth, 0, this.vertPos, 0.25)
      this.dstPathHourDigit = new FontPath(this, this.myTime.currentHourDigit, 1 * this.srcPathHourTenth.scaledWidthPixels, this.vertPos, 0.25)
      this.dstPathMinutesDigit = new FontPath(this, this.myTime.currentMinuteDigit, 3 * this.srcPathMinutesTenth.scaledWidthPixels, this.vertPos, 0.25)
      this.dstPathMinutesTenth = new FontPath(this, this.myTime.currentMinuteTenth, 2 * this.srcPathHourDigit.scaledWidthPixels, this.vertPos, 0.25)
      this.tweenMorphSrc(this.srcPathHourTenth, this.dstPathHourTenth);
      this.tweenMorphSrc(this.srcPathHourDigit, this.dstPathHourDigit);
      this.tweenMorphSrc(this.srcPathMinutesTenth, this.dstPathMinutesTenth);
      this.tweenMorphSrc(this.srcPathMinutesDigit, this.dstPathMinutesDigit);

    }
  }
}
