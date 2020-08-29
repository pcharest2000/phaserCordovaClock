import * as Phaser from "phaser";
import MyTime from "../objects/myTime";
import Matrix from "../objects/matrix"
import * as FONT from "../objects/fonts"
import TweenGroup from "../objects/tweenGroup"
import TweenGroupSequence from "../objects/tweenGroupSequence"
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "FadeClock"
};



export default class ClockFadeScene extends Phaser.Scene {
  private counter: number;
  private myTimer: Phaser.Time.TimerEvent;
  private myTime: MyTime;
  private matrix: Matrix;
  private font: FONT.PixelFont;
  private path: Phaser.Curves.Path;
  constructor() {
    super({ key: "ClockFadeScene" });
  }
  public myEvent() {
//    this.transitionDropRain();
  }
  public create() {
    //this.path = new Phaser.Curves.Path(0,0);
    this.myTimer = this.time.addEvent({
      delay: 20000,
      callbackScope: this,
      callback: this.myEvent,
      loop: true
    })
    this.font = new FONT.PixelFont();
    this.font.setFont(FONT.SourceCodePro_26)
    this.matrix = new Matrix(this, 128);
    this.myTime = new MyTime();
    this.matrix.setAllScale(0);
    this.transitionDropRain();
  }
  public implodeDigit(x: number, y: number, num: number, dropTweens: Phaser.Tweens.Tween[], offSetDelay: number) {
    let digitArray = this.font.getDigitArray(num);
    for (let i = 0; i < digitArray.width; i++) {
      for (let j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          let ranPos = Phaser.Math.Between(0, 3);
          let ranY: number = 0;
          let ranX: number = 0;
          switch (ranPos) {
            case 0: {
              ranX = Phaser.Math.Between(0, this.sys.canvas.width);
              ranY = -20;
              break;
            }
            case 1: {
              ranX = Phaser.Math.Between(0, this.sys.canvas.width);
              ranY = 20 + this.sys.canvas.height;
              break;
            }
            case 2: {
              ranX = -20;
              ranY = Phaser.Math.Between(0, this.sys.canvas.height);
              break;
            }
            case 3: {
              ranX = 20 + this.sys.canvas.width;
              ranY = Phaser.Math.Between(0, this.sys.canvas.height);
              break;
            }
          }
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            x: { start: ranX, to: this.matrix.squares[i + x][j + y].data.values.xOri },
            y: { start: ranY, to: this.matrix.squares[i + x][j + y].data.values.yOri },
            scale: { from: 0.9, to: 0.9 },
            repeat: 0,
            paused: true,
            yoyo: false,
            ease: 'cubic',
            //ease: 'cubic',
            duration: Phaser.Math.Between(500, 1500),
            delay: Phaser.Math.Between(0, 500) + offSetDelay
          })
          dropTweens.push(tween);
        }
      }
    }
  }

  public explodeDigit(x: number, y: number, num: number, explodeTweens: Phaser.Tweens.Tween[], offSetDelay: number) {
    let digitArray = this.font.getDigitArray(num);
    for (let i = 0; i < digitArray.width; i++) {
      for (let j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          let ranPos = Phaser.Math.Between(0, 3);
          let ranY: number = 0;
          let ranX: number = 0;
          switch (ranPos) {
            case 0: {
              ranX = Phaser.Math.Between(0, this.sys.canvas.width);
              ranY = -20;
              break;
            }
            case 1: {
              ranX = Phaser.Math.Between(0, this.sys.canvas.width);
              ranY = 20 + this.sys.canvas.height;
              break;
            }
            case 2: {
              ranX = -20;
              ranY = Phaser.Math.Between(0, this.sys.canvas.height);
              break;
            }
            case 3: {
              ranX = 20 + this.sys.canvas.width;
              ranY = Phaser.Math.Between(0, this.sys.canvas.height);
              break;
            }
          }
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: ranX },
            y: { start: this.matrix.squares[i + x][j + y].data.values.yOri, to: ranY },
            scale: { start: 0.9, to: 0.3 },
            repeat: 0,
            paused: true,
            yoyo: false,
            ease: 'Circ',
            //ease: 'cubic',
            duration: Phaser.Math.Between(500, 1500),
            delay: Phaser.Math.Between(0, 500) + offSetDelay
          })
          explodeTweens.push(tween);
        }
      }
    }
  }
  public dropDigitFromTop(x: number, y: number, num: number, dropTweens: Phaser.Tweens.Tween[]) {
    let digitArray = this.font.getDigitArray(num);
    for (let i = 0; i < digitArray.width; i++) {
      for (let j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            y: { start: 0, to: this.matrix.squares[i + x][j + y].data.values.yOri },
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: this.matrix.squares[i + x][j + y].data.values.xOri },
            scale: { from: 0.3, to: 0.9 },
            repeat: 0,
            paused: true,
            yoyo: false,
            duration: Phaser.Math.Between(500, 2000),
            delay: Phaser.Math.Between(0, 1000)
          })
          dropTweens.push(tween);
        }
      }
    }
  }
  public dropDigitToBottom(x: number, y: number, num: number, dropTweens: Phaser.Tweens.Tween[]) {
    let digitArray = this.font.getDigitArray(num);
    for (let i = 0; i < digitArray.width; i++) {
      for (let j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            scale: { start: 0.9, to: 0.0 },
            y: { start: this.matrix.squares[i + x][j + y].data.values.yOri, to: this.sys.canvas.height + 20 },
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: this.matrix.squares[i + x][j + y].data.values.xOri },
            repeat: 0,
            paused: true,
            yoyo: false,
            duration: Phaser.Math.Between(500, 2000),
            delay: Phaser.Math.Between(0, 1000)
          })
          dropTweens.push(tween);
        }
      }
    }
  }
  public dropDigitFromTopRain(x: number, y: number, num: number, dropTweens: Phaser.Tweens.Tween[]) {
    let digitArray = this.font.getDigitArray(num);
    let deltaTime = 0;
    for (let j = digitArray.heigth; j >= 0; j--) {
      for (let i = 0; i < digitArray.width; i++) {
        if (digitArray.data[i][j] == 1) {
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            y: { start: 0, to: this.matrix.squares[i + x][j + y].data.values.yOri },
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: this.matrix.squares[i + x][j + y].data.values.xOri },
            scale: { from: 0.1, to: 0.9 },
            repeat: 0,
            paused: true,
            yoyo: false,
            duration: 500,
            delay: deltaTime+Phaser.Math.Between(0,300)

          })
          dropTweens.push(tween);
        }
      }
      deltaTime += 100;
    }
  }
  public dropDigitToBottomRain(x: number, y: number, num: number, dropTweens: Phaser.Tweens.Tween[]) {
    let digitArray = this.font.getDigitArray(num);
    let deltaTime = 0;
    for (let j = digitArray.heigth; j >= 0; j--) {
      for (let i = 0; i < digitArray.width; i++) {
        if (digitArray.data[i][j] == 1) {
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            scale: { start: 0.9, to: 0.0 },
            y: { start: this.matrix.squares[i + x][j + y].data.values.yOri, to: this.sys.canvas.height + 20 },
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: this.matrix.squares[i + x][j + y].data.values.xOri },
            repeat: 0,
            paused: true,
            yoyo: false,
            duration: Phaser.Math.Between(500, 1000),
            delay: deltaTime
          })
          dropTweens.push(tween);
        }
      }
      deltaTime += 100;
    }
  }
  public fadeDigit(x: number, y: number, num: number, fadeTweens: Phaser.Tweens.Tween[]) {
    let digitArray = this.font.getDigitArray(num);
    for (let i = 0; i < digitArray.width; i++) {
      for (let j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: this.matrix.squares[i + x][j + y].data.values.xOri },
            y: { start: this.matrix.squares[i + x][j + y].data.values.yOri, to: this.matrix.squares[i + x][j + y].data.values.yOri },
            scale: { start: 0.9, to: 0.0 },
            repeat: 0,
            paused: true,
            yoyo: false,
            duration: Phaser.Math.Between(500, 2000)
          })
          fadeTweens.push(tween);
        }
      }
    }
  }
  public growDigit(x: number, y: number, num: number, growTweens: Phaser.Tweens.Tween[]) {
    let digitArray = this.font.getDigitArray(num);
    for (let i = 0; i < digitArray.width; i++) {
      for (let j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            scale: { start: 0.1, to: 0.9 },
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: this.matrix.squares[i + x][j + y].data.values.xOri },
            y: { start: this.matrix.squares[i + x][j + y].data.values.yOri, to: this.matrix.squares[i + x][j + y].data.values.yOri },
            repeat: 0,
            paused: true,
            yoyo: false,
            duration: Phaser.Math.Between(500, 2000)
          })
          growTweens.push(tween);
        }
      }
    }
  }
  public implodeDigitToPoint(x: number, y: number, pointX: number, pointY: number, num: number, implodeTweens: Phaser.Tweens.Tween[]) {
    let digitArray = this.font.getDigitArray(num);

    for (let i = 0; i < digitArray.width; i++) {
      for (let j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: pointX },
            y: { start: this.matrix.squares[i + x][j + y].data.values.yOri, to: pointY },
            scale: { start: 0.9, to: 0.0 },
            repeat: 0,
            paused: true,
            yoyo: false,
            duration: Phaser.Math.Between(500, 2000),
            delay: Phaser.Math.Between(0, 800)
          });
          implodeTweens.push(tween);
        }
      }
    }
  }
  public reverseImplodeDigitToPoint(x: number, y: number, pointX: number, pointY: number, num: number, implodeTweens: Phaser.Tweens.Tween[]) {
    let digitArray = this.font.getDigitArray(num);

    for (let i = 0; i < digitArray.width; i++) {
      for (let j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          let tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            x: { to: this.matrix.squares[i + x][j + y].data.values.xOri, start: pointX },
            y: { to: this.matrix.squares[i + x][j + y].data.values.yOri, start: pointY },
            scale: { start: 0.0, to: 0.9 },
            repeat: 0,
            paused: true,
            yoyo: false,
            duration: Phaser.Math.Between(500, 2000),
            delay: Phaser.Math.Between(0, 800)
          });
          implodeTweens.push(tween);
        }
      }
    }
  }
  public transitionImplode() {
    let xpos = 0;
    let ypos = this.matrix.numRow / 2 - this.font.width / 2;
    let implodeTweens: Phaser.Tweens.Tween[] = [];
    let reverseTweens: Phaser.Tweens.Tween[] = [];
    let pointX = this.scene.systems.canvas.width / 2;
    let pointY = this.scene.systems.canvas.height / 2;

    this.implodeDigitToPoint(xpos, ypos, pointX, pointY, this.myTime.lastHourTenth, implodeTweens);
    this.reverseImplodeDigitToPoint(xpos, ypos, pointX, pointY, this.myTime.lastHourTenth, reverseTweens);
    xpos += this.font.width;
    this.implodeDigitToPoint(xpos, ypos, pointX, pointY, this.myTime.lastHourDigit, implodeTweens);
    this.reverseImplodeDigitToPoint(xpos, ypos, pointX, pointY, this.myTime.lastHourDigit, reverseTweens);
    xpos += this.font.width;
    this.implodeDigitToPoint(xpos, ypos, pointX, pointY, 10, implodeTweens);
    this.reverseImplodeDigitToPoint(xpos, ypos, pointX, pointY, 10, reverseTweens);
    xpos += this.font.width;

    this.implodeDigitToPoint(xpos, ypos, pointX, pointY, this.myTime.lastMinuteTenth, implodeTweens);
    this.reverseImplodeDigitToPoint(xpos, ypos, pointX, pointY, this.myTime.currentMinuteTenth, reverseTweens);

    xpos += this.font.width;
    this.implodeDigitToPoint(xpos, ypos, pointX, pointY, this.myTime.lastMinuteDigit, implodeTweens);
    this.reverseImplodeDigitToPoint(xpos, ypos, pointX, pointY, this.myTime.currentMinuteDigit, reverseTweens);

    let tweenSequence = new TweenGroupSequence(this, implodeTweens, reverseTweens);
  }
  public transitionFade() {
    let xpos = 0;
    let ypos = this.matrix.numRow / 2 - this.font.width / 2;
    let fadeTweens: Phaser.Tweens.Tween[] = [];
    let growTweens: Phaser.Tweens.Tween[] = [];

    this.fadeDigit(xpos, ypos, this.myTime.lastHourTenth, fadeTweens);
    this.growDigit(xpos, ypos, this.myTime.lastHourTenth, growTweens);
    xpos += this.font.width;
    this.fadeDigit(xpos, ypos, this.myTime.lastHourDigit, fadeTweens);
    this.growDigit(xpos, ypos, this.myTime.lastHourDigit, growTweens);
    xpos += this.font.width;
    this.fadeDigit(xpos, ypos, 10, fadeTweens);
    this.growDigit(xpos, ypos, 10, growTweens);
    xpos += this.font.width;

    this.fadeDigit(xpos, ypos, this.myTime.lastMinuteTenth, fadeTweens);
    this.growDigit(xpos, ypos, this.myTime.currentMinuteTenth, growTweens);

    xpos += this.font.width;
    this.fadeDigit(xpos, ypos, this.myTime.lastMinuteDigit, fadeTweens);
    this.growDigit(xpos, ypos, this.myTime.currentMinuteDigit, growTweens);

    let tweenSequence = new TweenGroupSequence(this, fadeTweens, growTweens);
  }
  public transitionDropRain() {
    let xpos = 0;
    let ypos = this.matrix.numRow / 2 - this.font.width / 2;
    let dropBottomTweens: Phaser.Tweens.Tween[] = [];
    let dropFromTopTweens: Phaser.Tweens.Tween[] = [];


    this.dropDigitToBottomRain(xpos, ypos, this.myTime.lastHourTenth, dropBottomTweens);
    this.dropDigitFromTopRain(xpos, ypos, this.myTime.currentHourTenth, dropFromTopTweens);
    xpos += this.font.width;
    this.dropDigitToBottomRain(xpos, ypos, this.myTime.lastHourDigit, dropBottomTweens);
    this.dropDigitFromTopRain(xpos, ypos, this.myTime.currentHourDigit, dropFromTopTweens);
    xpos += this.font.width;
    this.dropDigitToBottomRain(xpos, ypos, 10, dropBottomTweens);
    this.dropDigitFromTopRain(xpos, ypos, 10, dropFromTopTweens);
    xpos += this.font.width;
    this.dropDigitToBottomRain(xpos, ypos, this.myTime.lastMinuteTenth, dropBottomTweens);
    this.dropDigitFromTopRain(xpos, ypos, this.myTime.currentMinuteTenth, dropFromTopTweens);
    xpos += this.font.width;
    this.dropDigitToBottomRain(xpos, ypos, this.myTime.lastMinuteDigit, dropBottomTweens);
    this.dropDigitFromTopRain(xpos, ypos, this.myTime.currentMinuteDigit, dropFromTopTweens);

    let tweenSequence = new TweenGroupSequence(this, dropBottomTweens, dropFromTopTweens);
  }
  public transitionDrop() {
    let xpos = 0;
    let ypos = this.matrix.numRow / 2 - this.font.width / 2;
    let dropBottomTweens: Phaser.Tweens.Tween[] = [];
    let dropFromTopTweens: Phaser.Tweens.Tween[] = [];


    this.dropDigitToBottom(xpos, ypos, this.myTime.lastHourTenth, dropBottomTweens);
    this.dropDigitFromTop(xpos, ypos, this.myTime.currentHourTenth, dropFromTopTweens);
    xpos += this.font.width;
    this.dropDigitToBottom(xpos, ypos, this.myTime.lastHourDigit, dropBottomTweens);
    this.dropDigitFromTop(xpos, ypos, this.myTime.currentHourDigit, dropFromTopTweens);
    xpos += this.font.width;
    this.dropDigitToBottom(xpos, ypos, 10, dropBottomTweens);
    this.dropDigitFromTop(xpos, ypos, 10, dropFromTopTweens);
    xpos += this.font.width;
    this.dropDigitToBottom(xpos, ypos, this.myTime.lastMinuteTenth, dropBottomTweens);
    this.dropDigitFromTop(xpos, ypos, this.myTime.currentMinuteTenth, dropFromTopTweens);
    xpos += this.font.width;
    this.dropDigitToBottom(xpos, ypos, this.myTime.lastMinuteDigit, dropBottomTweens);
    this.dropDigitFromTop(xpos, ypos, this.myTime.currentMinuteDigit, dropFromTopTweens);

    let tweenSequence = new TweenGroupSequence(this, dropBottomTweens, dropFromTopTweens);
  }
  public transitionExplode() {
    let xpos = 0;
    let ypos = this.matrix.numRow / 2 - this.font.width / 2;
    let explodeTween: Phaser.Tweens.Tween[] = [];
    let implodeTween: Phaser.Tweens.Tween[] = [];
    //Calculate xpos to center font
    //xpos = Math.floor((this.matrix.numCol - this.font.width * 4 + 1.5 * this.font.width) / 2)-1
    //   xpos = Math.floor((this.matrix.numCol - this.font.width * 4.5) / 2)
    ///console.log(xpos);
    this.explodeDigit(xpos, ypos, this.myTime.lastHourTenth, explodeTween, Phaser.Math.Between(0, 2000));
    this.implodeDigit(xpos, ypos, this.myTime.currentHourTenth, implodeTween, Phaser.Math.Between(0, 2000));
    xpos += this.font.width;
    this.explodeDigit(xpos, ypos, this.myTime.lastHourDigit, explodeTween, Phaser.Math.Between(0, 2000));
    this.implodeDigit(xpos, ypos, this.myTime.currentHourDigit, implodeTween, Phaser.Math.Between(0, 2000));
    xpos += this.font.width;
    this.explodeDigit(xpos, ypos, 10, explodeTween, Phaser.Math.Between(0, 2000));
    this.implodeDigit(xpos, ypos, 10, implodeTween, Phaser.Math.Between(0, 2000));
    xpos += this.font.width;
    this.explodeDigit(xpos, ypos, this.myTime.lastMinuteTenth, explodeTween, Phaser.Math.Between(0, 2000));
    this.implodeDigit(xpos, ypos, this.myTime.currentMinuteTenth, implodeTween, Phaser.Math.Between(0, 2000));
    xpos += this.font.width;
    this.explodeDigit(xpos, ypos, this.myTime.lastMinuteDigit, explodeTween, Phaser.Math.Between(0, 2000));
    this.implodeDigit(xpos, ypos, this.myTime.currentMinuteDigit, implodeTween, Phaser.Math.Between(0, 2000));

    let tweenSequence = new TweenGroupSequence(this, explodeTween, implodeTween);
  }
  public update(time, delta) {

    if (this.myTime.timeChanged()) {
      let rand = Phaser.Math.Between(0, 4);
      //let rand = 2;
      switch (rand) {
        case 0: {
          console.log("Fade");
          this.transitionFade();
          break;
        }
        case 1: {
          console.log("Explode");
          this.transitionExplode();
          break;
        }
        case 2: {
          console.log("Drop");
          this.transitionDrop();
          break;
        }
        case 3: {
          console.log("Drop");
          this.transitionImplode();
          break;
        }
        case 4: {
          console.log("Drop");
          this.transitionDropRain();
          break;
        }
      }
      // console.log("TimeChanged")
    }
   }
}
