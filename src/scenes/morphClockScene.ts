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
  constructor() {
    super({ key: "MorphClockScene" });
    this.count = 0;
  }
  public myEvent() {

    this.drawDigitPath(this.count);
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
    let delay = 0;
    let delta = 1000/this.fontPath.points[1][0].length;
    for (let i = 0; i < this.fontPath.points[1][0].length; i++) {
      this.add.tween({
        targets: this.fontPath.points[1][0][i],
        x: { start: this.fontPath.points[1][0][i].x, to: this.fontPath.points[1][0][i].x + 60 },
        y: { start: this.fontPath.points[1][0][i].y, to: this.fontPath.points[1][0][i].y + 60 },
        // x: { start: this.fontPath.points[1][0][i].x, to: this.fontPath.points[1][0][i].x + Phaser.Math.Between(-50, 50) },
        // y: { start: this.fontPath.points[1][0][i].y, to: this.fontPath.points[1][0][i].y + Phaser.Math.Between(-50, 50) },
        repeat: -1,
        duration: 1000,
        delay: delay,
        yoyo: true,
        ease: 'Sine.Out'
      })
      delay += 80;
    }
    //console.log(this.spline);
    // this.spline.points[0].x=0;
    // this.spline.points[0].y=0;
    // this.spline[0].x=0;

  }
  public drawDigitPath(digit: number) {

    if (digit > 9) {
      return;
    }
    this.graphics.clear();
    this.graphics.lineStyle(2, 0xffffff, 1);
    this.graphics.fillStyle(0xff00ff);   // color: 0xRRGGBB
    for (var i = 0; i < this.fontPath.path[digit].length; i++) {
      //    this.graphics.lineStyle(2, 0xffffff, 1);
      //      this.fontPath.path[digit][i].draw(this.graphics);
      this.graphics.lineStyle(2, 0xff0000, 1);
      this.fontPath.splines[digit][i].draw(this.graphics, 64);
      for (var j = 0; j < this.fontPath.points[digit][i].length; j++)
        this.graphics.fillCircle(this.fontPath.points[digit][i][j].x, this.fontPath.points[digit][i][j].y, 6);
    }
  }
  public drawDigitPath2() {
    let spline = new Phaser.Curves.Spline(this.fontPath.points[1][0])
    this.graphics.lineStyle(2, 0xff0000, 1);
    spline.draw(this.graphics, 128);

  }
  public update(time, delta) {
    this.graphics.clear()
    this.drawDigitPath2();
  }
}
