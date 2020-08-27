import * as Phaser from "phaser";
import * as FONT from "../objects/fonts"
import TweenGroup from "../objects/tweenGroup"
class Square {
    public sq: Phaser.GameObjects.Rectangle;
    constructor() {

    }
}
interface FadeParams {
    x: number;
    y: number;
    digit: number;
    tweenCountCompleted: number;
    tweenCountToComplete: number;
}
export default class Matrix {

    public numCol: number;
    public numRow: number;
    private scene: Phaser.Scene;
    private squareWidth: number;
    public squares: Phaser.GameObjects.Rectangle[][];
    constructor(scene: Phaser.Scene, numCol: number) {
        this.scene = scene;
        this.numCol = numCol;
        this.squareWidth = this.scene.sys.canvas.width / this.numCol;
        this.numRow = Math.floor(this.scene.sys.canvas.height / this.squareWidth);

        this.squares = new Array(this.numCol * this.numRow);
        this.squares = [];
        this.create();
    }
    public create(): void {
        for (var i = 0; i < this.numCol; i++) {
            this.squares[i] = []
            for (var j = 0; j < this.numRow; j++) {
                var x = i * this.squareWidth + this.squareWidth / 2;
                var y = j * this.squareWidth + this.squareWidth / 2;
                this.squares[i][j] = this.scene.add.rectangle(x, y, this.squareWidth, this.squareWidth, 0xffffff)
                this.squares[i][j].setData({xOri: x,yOri: y});
            }
        }
    }

    public resetPositionAll() {
        // if (scale < 0 || scale > 1) {
        //     return;
        // }
        for (var x = 0; x < this.numCol; x++) {
            for (var y = 0; y < this.numRow; y++) {
                this.squares[x][y].x = this.squares[x][y].data.values.xOri;
                this.squares[x][y].y = this.squares[x][y].data.values.yOri;
            }
        }

    }
    public setAllScale(scale: number) {
        // if (scale < 0 || scale > 1) {
        //     return;
        // }
        for (var x = 0; x < this.numCol; x++) {
            for (var y = 0; y < this.numRow; y++) {
                this.squares[x][y].scale = scale;
            }
        }

    }
    public clearAllPixel() {
        for (var x = 0; x < this.numCol; x++) {
            for (var y = 0; y < this.numRow; y++) {
                this.squares[x][y].fillColor = 0x000000;
            }
        }
    }
    public setAllPixelColor(r: number, g: number, b: number) {
        for (var x = 0; x < this.numCol; x++) {
            for (var y = 0; y < this.numRow; y++) {
                this.squares[x][y].fillColor = Phaser.Display.Color.GetColor(r, g, b);
            }
        }
    }
    public setPixelColor(x: number, y: number, r: number, g: number, b: number) {
        if (x >= this.numCol || y >= this.numRow) {
            return;
        }
        this.squares[x][y].fillColor = Phaser.Display.Color.GetColor(r, g, b);
    }

    public drawDigit(x: number, y: number, num: number, font: FONT.Myfont) {
        // console.log(font.data);
        var xoffset = font.width * num;
        var xIndex = 0;
        var yIndex = 0;
        for (var j = 0; j < font.heigth; j++) {
            for (var i = 0; i < font.width; i++) {
                if (font.data[xoffset + i + j * font.width * 10] == '*') {
                    xIndex = x + i;
                    yIndex = y + j
                    if (xIndex < this.numCol && yIndex < this.numRow)
                        this.setPixelColor(xIndex, yIndex, 100, 0, 0);
                }
            }
        }
    }

    public getDigitArray(num: number, font: FONT.Myfont): FONT.DigitArray {
        var digitArray: FONT.DigitArray = {
            width: font.width,
            heigth: font.heigth,
            data: new Array(font.width * font.heigth),
            numPixels: 0
        }
        var xoffset = font.width * num;
        for (var i = 0; i < font.width; i++) {
            digitArray.data[i] = [];
            for (var j = 0; j < font.heigth; j++) {
                digitArray.data[i][j] = 0
                if (font.data[xoffset + i + j * font.width * 10] == '*') {
                    digitArray.data[i][j] = 1;
                    digitArray.numPixels++;
                }
            }
        }
        return digitArray;
    }
    public drawDigitArray(x: number, y: number, digitArray: FONT.DigitArray) {
        // console.log(font.data);
        var xIndex = 0;
        var yIndex = 0;
        for (var j = 0; j < digitArray.heigth; j++) {
            for (var i = 0; i < digitArray.width; i++) {
                if (digitArray.data[i][j] == 1) {
                    xIndex = x + i;
                    yIndex = y + j
                    if (xIndex < this.numCol && yIndex < this.numRow)
                        this.setPixelColor(xIndex, yIndex, 100, 0, 0);
                }
            }
        }
    }
}
