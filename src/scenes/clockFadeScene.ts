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
  constructor() {
    super({ key: "ClockFadeScene" });
  }
  public myEvent() {

    //  var explodeTween: Phaser.Tweens.Tween[] = [];
    //  var implodeTween: Phaser.Tweens.Tween[] = [];

    //  // this.matrix.resetPositionAll();
    //  // this.matrix.setAllScale(0);
    //  // this.dropDigitToBottom(40,10,this.counter,toBottomTween);
    // // this.explodeDigit(70,10,this.counter,explodeTween);
    //  this.explodeDigit(40,10,this.counter,explodeTween,0);
    //  this.explodeDigit(70,10,this.counter,explodeTween,800);
    //  this.counter++;
    //  if (this.counter > 9) this.counter = 0;
    //  this.implodeDigit(40,10,this.counter,implodeTween,0)
    //  this.implodeDigit(70,10,this.counter,implodeTween,800)
    //    // var tweenSequence = new TweenGroupSequence(this,toBottomTween,fromTopTween);
    //  var tweenSequence = new TweenGroupSequence(this,explodeTween,implodeTween);
    //this.transitionDrop();
    //this.myTime.timeChanged();
    //this.transitionExplode();
  }
  public create() {
    console.log("Starting Clock Fade");
    this.counter = 0;
    this.myTimer = this.time.addEvent({
      delay: 50000,
      callbackScope: this,
      callback: this.myEvent,
      loop: true
    })
    this.font = new FONT.PixelFont();
    this.font.setFont(FONT.SourceCodePro_26)
    this.matrix = new Matrix(this, 128);
    this.myTime = new MyTime();
    this.matrix.setAllScale(0);
    this.transitionFade();
  }
  public implodeDigit(x: number, y: number, num: number, dropTweens: Phaser.Tweens.Tween[], offSetDelay: number) {
    var digitArray = this.font.getDigitArray(num);
    for (var i = 0; i < digitArray.width; i++) {
      for (var j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          var ranPos = Phaser.Math.Between(0, 3);
          var ranY: number = 0;
          var ranX: number = 0;
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
          var tween: Phaser.Tweens.Tween = this.add.tween({
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
    var digitArray = this.font.getDigitArray(num);
    for (var i = 0; i < digitArray.width; i++) {
      for (var j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          var ranPos = Phaser.Math.Between(0, 3);
          var ranY: number = 0;
          var ranX: number = 0;
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
          var tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            x: { start: this.matrix.squares[i + x][j + y].data.values.xOri, to: ranX },
            y: { start: this.matrix.squares[i + x][j + y].data.values.yOri, to: ranY },
            scale: { from: 0.9, to: 0.3 },
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
    var digitArray = this.font.getDigitArray(num);
    for (var i = 0; i < digitArray.width; i++) {
      for (var j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          var tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            y: { start: 0, to: this.matrix.squares[i + x][j + y].data.values.yOri },
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
    var digitArray = this.font.getDigitArray(num);
    for (var i = 0; i < digitArray.width; i++) {
      for (var j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          var tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            scale: { from: 0.9, to: 0.3 },
            y: { start: this.matrix.squares[i + x][j + y].data.values.yOri, to: this.sys.canvas.height + 20 },
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
  public fadeDigit(x: number, y: number, num: number, fadeTweens: Phaser.Tweens.Tween[]) {
    var digitArray = this.font.getDigitArray(num);
    for (var i = 0; i < digitArray.width; i++) {
      for (var j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          var tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            scaleX: 0,
            scaleY: 0,
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
    var digitArray = this.font.getDigitArray(num);
    for (var i = 0; i < digitArray.width; i++) {
      for (var j = 0; j < digitArray.heigth; j++) {
        if (digitArray.data[i][j] == 1) {
          var tween: Phaser.Tweens.Tween = this.add.tween({
            targets: this.matrix.squares[i + x][j + y],
            scaleX: 0.9,
            scaleY: 0.9,
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
  public transitionFade() {
    var xpos = 0;
    var ypos = this.matrix.numRow / 2 - this.font.width / 2;
    var fadeTweens: Phaser.Tweens.Tween[] = [];
    var growTweens: Phaser.Tweens.Tween[] = [];

    this.fadeDigit(xpos, ypos, this.myTime.lastHourTenth, fadeTweens);
    this.growDigit(xpos, ypos, this.myTime.lastHourTenth, growTweens);
    xpos += this.font.width;
    this.fadeDigit(xpos, ypos, this.myTime.lastHourDigit, fadeTweens);
    this.growDigit(xpos, ypos, this.myTime.lastHourDigit, growTweens);
    xpos += this.font.width * 1.5;

    this.fadeDigit(xpos, ypos, this.myTime.lastMinuteTenth, fadeTweens);
    this.growDigit(xpos, ypos, this.myTime.currentMinuteTenth, growTweens);

    xpos += this.font.width;
    this.fadeDigit(xpos, ypos, this.myTime.lastMinuteDigit, fadeTweens);
    this.growDigit(xpos, ypos, this.myTime.currentMinuteDigit, growTweens);

    var tweenSequence = new TweenGroupSequence(this, fadeTweens, growTweens);
  }
  public transitionDrop() {
    var xpos = 0;
    var ypos = this.matrix.numRow / 2 - this.font.width / 2;
    var dropBottomTweens: Phaser.Tweens.Tween[] = [];
    var dropFromTopTweens: Phaser.Tweens.Tween[] = [];


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

    var tweenSequence = new TweenGroupSequence(this, dropBottomTweens, dropFromTopTweens);
  }
  public transitionExplode() {
    var xpos = 0;
    var ypos = this.matrix.numRow / 2 - this.font.width / 2;
    var explodeTween: Phaser.Tweens.Tween[] = [];
    var implodeTween: Phaser.Tweens.Tween[] = [];
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

    var tweenSequence = new TweenGroupSequence(this, explodeTween, implodeTween);
  }
  public update(time, delta) {
    //this.transitionDrop();

    if (this.myTime.timeChanged()) {
      this.transitionFade();
     // console.log("TimeChanged")
    }
  }
}
