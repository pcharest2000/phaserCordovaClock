import * as Phaser from "phaser";

export interface Fonty {
        width: number;
        height: number;
        numPath: number;
        pathArray: Phaser.Curves.Path[];
}
export class FontPath {
        public path: Phaser.Curves.Path[][];
        public splines: Phaser.Curves.Spline[][];
        public points: Phaser.Math.Vector2[][][];
        private fonts: Fonty[];
        constructor() {
                this.fonts = [];
                this.path = []
                this.path[0] = [];
                this.path[0][0] = new Phaser.Curves.Path(0, 0);
                this.path[0][0].moveTo(300, 1012);
                this.path[0][0].quadraticBezierTo(495, 954, 447, 1012);
                this.path[0][0].quadraticBezierTo(544, 680, 544, 895);
                this.path[0][0].quadraticBezierTo(495, 409, 544, 464);
                this.path[0][0].quadraticBezierTo(300, 353, 447, 353);
                this.path[0][0].quadraticBezierTo(104, 409, 153, 353);
                this.path[0][0].quadraticBezierTo(56, 680, 56, 464);
                this.path[0][0].quadraticBezierTo(104, 954, 56, 895);
                this.path[0][0].quadraticBezierTo(300, 1012, 153, 1012);
                this.path[0][1] = new Phaser.Curves.Path(0, 0);
                this.path[0][1].moveTo(300, 898);
                this.path[0][1].quadraticBezierTo(212, 872, 237, 898);
                this.path[0][1].quadraticBezierTo(187, 680, 187, 845);
                this.path[0][1].quadraticBezierTo(212, 491, 187, 515);
                this.path[0][1].quadraticBezierTo(300, 467, 237, 467);
                this.path[0][1].quadraticBezierTo(388, 491, 363, 467);
                this.path[0][1].quadraticBezierTo(413, 680, 413, 515);
                this.path[0][1].quadraticBezierTo(388, 872, 413, 845);
                this.path[0][1].quadraticBezierTo(300, 898, 363, 898);
                this.path[0][2] = new Phaser.Curves.Path(0, 0);
                this.path[0][2].moveTo(300, 754);
                this.path[0][2].quadraticBezierTo(358, 739, 342, 754);
                this.path[0][2].quadraticBezierTo(375, 678, 375, 724);
                this.path[0][2].quadraticBezierTo(358, 617, 375, 632);
                this.path[0][2].quadraticBezierTo(300, 602, 342, 602);
                this.path[0][2].quadraticBezierTo(241, 617, 258, 602);
                this.path[0][2].quadraticBezierTo(225, 678, 225, 632);
                this.path[0][2].quadraticBezierTo(241, 739, 225, 724);
                this.path[0][2].quadraticBezierTo(300, 754, 258, 754);

                //1 Width: 600 Height1000
                this.path[1] = []
                this.path[1][0] = new Phaser.Curves.Path(0, 0);
                this.path[1][0].moveTo(79, 1000);
                this.path[1][0].lineTo(541, 1000);
                this.path[1][0].lineTo(541, 881);
                this.path[1][0].lineTo(397, 881);
                this.path[1][0].lineTo(397, 365);
                this.path[1][0].lineTo(289, 365);
                this.path[1][0].quadraticBezierTo(217, 402, 240, 394);
                this.path[1][0].quadraticBezierTo(109, 423, 195, 410);
                this.path[1][0].lineTo(109, 514);
                this.path[1][0].lineTo(250, 514);
                this.path[1][0].lineTo(250, 881);
                this.path[1][0].lineTo(79, 881);
                this.path[1][0].lineTo(79, 1000);

                //2 Width: 600 Height1000
                this.path[2] = []
                this.path[2][0] = new Phaser.Curves.Path(0, 0);
                this.path[2][0].moveTo(58, 1000);
                this.path[2][0].lineTo(535, 1000);
                this.path[2][0].lineTo(535, 876);
                this.path[2][0].lineTo(384, 876);
                this.path[2][0].quadraticBezierTo(328, 878, 351, 876);
                this.path[2][0].quadraticBezierTo(269, 884, 305, 880);
                this.path[2][0].quadraticBezierTo(447, 719, 392, 776);
                this.path[2][0].quadraticBezierTo(502, 555, 502, 662);
                this.path[2][0].quadraticBezierTo(456, 393, 502, 433);
                this.path[2][0].quadraticBezierTo(278, 353, 411, 353);
                this.path[2][0].quadraticBezierTo(148, 370, 180, 353);
                this.path[2][0].quadraticBezierTo(51, 454, 117, 387);
                this.path[2][0].lineTo(130, 533);
                this.path[2][0].quadraticBezierTo(186, 484, 166, 499);
                this.path[2][0].quadraticBezierTo(258, 468, 207, 468);
                this.path[2][0].quadraticBezierTo(343, 485, 324, 468);
                this.path[2][0].quadraticBezierTo(362, 564, 362, 502);
                this.path[2][0].quadraticBezierTo(301, 709, 362, 655);
                this.path[2][0].quadraticBezierTo(58, 916, 240, 763);
                this.path[2][0].lineTo(58, 1000);

                //3 Width: 600 Height1000
                this.path[3] = []
                this.path[3][0] = new Phaser.Curves.Path(0, 0);
                this.path[3][0].moveTo(279, 1012);
                this.path[3][0].quadraticBezierTo(472, 979, 413, 1012);
                this.path[3][0].quadraticBezierTo(531, 827, 531, 945);
                this.path[3][0].quadraticBezierTo(500, 719, 531, 745);
                this.path[3][0].quadraticBezierTo(389, 672, 469, 693);
                this.path[3][0].lineTo(389, 668);
                this.path[3][0].quadraticBezierTo(487, 616, 465, 639);
                this.path[3][0].quadraticBezierTo(510, 527, 510, 593);
                this.path[3][0].quadraticBezierTo(462, 385, 510, 416);
                this.path[3][0].quadraticBezierTo(276, 353, 414, 353);
                this.path[3][0].quadraticBezierTo(158, 369, 194, 353);
                this.path[3][0].quadraticBezierTo(60, 434, 122, 384);
                this.path[3][0].lineTo(134, 524);
                this.path[3][0].quadraticBezierTo(198, 479, 178, 489);
                this.path[3][0].quadraticBezierTo(269, 468, 219, 468);
                this.path[3][0].quadraticBezierTo(345, 481, 327, 468);
                this.path[3][0].quadraticBezierTo(363, 538, 363, 494);
                this.path[3][0].quadraticBezierTo(340, 606, 363, 589);
                this.path[3][0].quadraticBezierTo(192, 623, 317, 623);
                this.path[3][0].lineTo(192, 727);
                this.path[3][0].quadraticBezierTo(362, 745, 341, 727);
                this.path[3][0].quadraticBezierTo(384, 818, 384, 762);
                this.path[3][0].quadraticBezierTo(359, 880, 384, 866);
                this.path[3][0].quadraticBezierTo(265, 893, 334, 893);
                this.path[3][0].quadraticBezierTo(179, 880, 207, 893);
                this.path[3][0].quadraticBezierTo(110, 829, 152, 866);
                this.path[3][0].lineTo(42, 922);
                this.path[3][0].quadraticBezierTo(130, 994, 91, 976);
                this.path[3][0].quadraticBezierTo(279, 1012, 170, 1012);

                //4 Width: 600 Height1000
                this.path[4] = []
                this.path[4][0] = new Phaser.Curves.Path(0, 0);
                this.path[4][0].moveTo(341, 1000);
                this.path[4][0].lineTo(478, 1000);
                this.path[4][0].lineTo(478, 848);
                this.path[4][0].lineTo(558, 848);
                this.path[4][0].lineTo(558, 736);
                this.path[4][0].lineTo(478, 736);
                this.path[4][0].lineTo(478, 365);
                this.path[4][0].lineTo(300, 365);
                this.path[4][0].lineTo(35, 747);
                this.path[4][0].lineTo(35, 848);
                this.path[4][0].lineTo(341, 848);
                this.path[4][0].lineTo(341, 1000);
                this.path[4][1] = new Phaser.Curves.Path(0, 0);
                this.path[4][1].moveTo(177, 736);
                this.path[4][1].lineTo(273, 598);
                this.path[4][1].quadraticBezierTo(308, 544, 295, 562);
                this.path[4][1].quadraticBezierTo(342, 490, 321, 526);
                this.path[4][1].lineTo(346, 490);
                this.path[4][1].quadraticBezierTo(342, 560, 344, 530);
                this.path[4][1].quadraticBezierTo(341, 629, 341, 589);
                this.path[4][1].lineTo(341, 736);
                this.path[4][1].lineTo(177, 736);

                //5 Width: 600 Height1000
                this.path[5] = []
                this.path[5][0] = new Phaser.Curves.Path(0, 0);
                this.path[5][0].moveTo(283, 1012);
                this.path[5][0].quadraticBezierTo(473, 972, 414, 1012);
                this.path[5][0].quadraticBezierTo(532, 790, 532, 931);
                this.path[5][0].quadraticBezierTo(481, 624, 532, 655);
                this.path[5][0].quadraticBezierTo(314, 593, 431, 593);
                this.path[5][0].quadraticBezierTo(270, 595, 282, 593);
                this.path[5][0].quadraticBezierTo(230, 608, 259, 597);
                this.path[5][0].lineTo(241, 489);
                this.path[5][0].lineTo(503, 489);
                this.path[5][0].lineTo(503, 365);
                this.path[5][0].lineTo(114, 365);
                this.path[5][0].lineTo(97, 686);
                this.path[5][0].lineTo(162, 728);
                this.path[5][0].quadraticBezierTo(216, 700, 205, 704);
                this.path[5][0].quadraticBezierTo(269, 696, 227, 696);
                this.path[5][0].quadraticBezierTo(360, 713, 336, 696);
                this.path[5][0].quadraticBezierTo(385, 794, 385, 730);
                this.path[5][0].quadraticBezierTo(359, 876, 385, 859);
                this.path[5][0].quadraticBezierTo(262, 893, 334, 893);
                this.path[5][0].quadraticBezierTo(178, 879, 202, 893);
                this.path[5][0].quadraticBezierTo(112, 830, 154, 865);
                this.path[5][0].lineTo(46, 923);
                this.path[5][0].quadraticBezierTo(135, 993, 98, 973);
                this.path[5][0].quadraticBezierTo(283, 1012, 173, 1012);

                //6 Width: 600 Height1000
                this.path[6] = []
                this.path[6][0] = new Phaser.Curves.Path(0, 0);
                this.path[6][0].moveTo(317, 1012);
                this.path[6][0].quadraticBezierTo(492, 972, 439, 1012);
                this.path[6][0].quadraticBezierTo(545, 799, 545, 931);
                this.path[6][0].quadraticBezierTo(502, 634, 545, 665);
                this.path[6][0].quadraticBezierTo(349, 603, 460, 603);
                this.path[6][0].quadraticBezierTo(271, 616, 301, 603);
                this.path[6][0].quadraticBezierTo(196, 672, 241, 628);
                this.path[6][0].quadraticBezierTo(235, 498, 202, 523);
                this.path[6][0].quadraticBezierTo(347, 472, 269, 472);
                this.path[6][0].quadraticBezierTo(410, 483, 389, 472);
                this.path[6][0].quadraticBezierTo(459, 517, 432, 493);
                this.path[6][0].lineTo(536, 429);
                this.path[6][0].quadraticBezierTo(458, 371, 493, 388);
                this.path[6][0].quadraticBezierTo(334, 353, 424, 353);
                this.path[6][0].quadraticBezierTo(127, 407, 194, 353);
                this.path[6][0].quadraticBezierTo(60, 697, 60, 460);
                this.path[6][0].quadraticBezierTo(123, 966, 60, 920);
                this.path[6][0].quadraticBezierTo(317, 1012, 187, 1012);
                this.path[6][1] = new Phaser.Curves.Path(0, 0);
                this.path[6][1].moveTo(314, 902);
                this.path[6][1].quadraticBezierTo(239, 886, 264, 902);
                this.path[6][1].quadraticBezierTo(200, 769, 215, 870);
                this.path[6][1].quadraticBezierTo(259, 716, 239, 724);
                this.path[6][1].quadraticBezierTo(317, 707, 280, 707);
                this.path[6][1].quadraticBezierTo(392, 721, 373, 707);
                this.path[6][1].quadraticBezierTo(411, 799, 411, 734);
                this.path[6][1].quadraticBezierTo(388, 887, 411, 871);
                this.path[6][1].quadraticBezierTo(314, 902, 365, 902);

                //7 Width: 600 Height1000
                this.path[7] = []
                this.path[7][0] = new Phaser.Curves.Path(0, 0);
                this.path[7][0].moveTo(193, 1000);
                this.path[7][0].lineTo(341, 1000);
                this.path[7][0].quadraticBezierTo(365, 693, 353, 752);
                this.path[7][0].quadraticBezierTo(539, 455, 378, 633);
                this.path[7][0].lineTo(539, 365);
                this.path[7][0].lineTo(62, 365);
                this.path[7][0].lineTo(62, 489);
                this.path[7][0].lineTo(381, 489);
                this.path[7][0].quadraticBezierTo(226, 722, 248, 656);
                this.path[7][0].quadraticBezierTo(193, 1000, 205, 788);

                //8 Width: 600 Height1000
                this.path[8] = []
                this.path[8][0] = new Phaser.Curves.Path(0, 0);
                this.path[8][0].moveTo(299, 1012);
                this.path[8][0].quadraticBezierTo(497, 974, 454, 1012);
                this.path[8][0].quadraticBezierTo(540, 836, 540, 936);
                this.path[8][0].quadraticBezierTo(514, 727, 540, 750);
                this.path[8][0].quadraticBezierTo(421, 670, 488, 703);
                this.path[8][0].lineTo(421, 666);
                this.path[8][0].quadraticBezierTo(491, 610, 471, 634);
                this.path[8][0].quadraticBezierTo(512, 527, 512, 586);
                this.path[8][0].quadraticBezierTo(471, 388, 512, 422);
                this.path[8][0].quadraticBezierTo(304, 353, 431, 353);
                this.path[8][0].quadraticBezierTo(133, 387, 178, 353);
                this.path[8][0].quadraticBezierTo(88, 528, 88, 420);
                this.path[8][0].quadraticBezierTo(108, 618, 88, 595);
                this.path[8][0].quadraticBezierTo(181, 678, 128, 641);
                this.path[8][0].lineTo(181, 682);
                this.path[8][0].quadraticBezierTo(88, 737, 115, 714);
                this.path[8][0].quadraticBezierTo(61, 838, 61, 760);
                this.path[8][0].quadraticBezierTo(106, 977, 61, 941);
                this.path[8][0].quadraticBezierTo(299, 1012, 152, 1012);
                this.path[8][1] = new Phaser.Curves.Path(0, 0);
                this.path[8][1].moveTo(343, 630);
                this.path[8][1].quadraticBezierTo(243, 593, 269, 605);
                this.path[8][1].quadraticBezierTo(217, 528, 217, 580);
                this.path[8][1].quadraticBezierTo(235, 467, 217, 479);
                this.path[8][1].quadraticBezierTo(301, 455, 254, 455);
                this.path[8][1].quadraticBezierTo(375, 472, 359, 455);
                this.path[8][1].quadraticBezierTo(391, 537, 391, 488);
                this.path[8][1].quadraticBezierTo(383, 586, 391, 570);
                this.path[8][1].quadraticBezierTo(343, 630, 375, 601);
                this.path[8][2] = new Phaser.Curves.Path(0, 0);
                this.path[8][2].moveTo(303, 910);
                this.path[8][2].quadraticBezierTo(213, 894, 238, 910);
                this.path[8][2].quadraticBezierTo(188, 821, 188, 877);
                this.path[8][2].quadraticBezierTo(201, 763, 188, 780);
                this.path[8][2].quadraticBezierTo(250, 720, 214, 746);
                this.path[8][2].quadraticBezierTo(372, 764, 341, 754);
                this.path[8][2].quadraticBezierTo(403, 831, 403, 773);
                this.path[8][2].quadraticBezierTo(382, 897, 403, 884);
                this.path[8][2].quadraticBezierTo(303, 910, 362, 910);

                //9 Width: 600 Height1000
                this.path[9] = []
                this.path[9][0] = new Phaser.Curves.Path(0, 0);
                this.path[9][0].moveTo(282, 658);
                this.path[9][0].quadraticBezierTo(206, 645, 225, 658);
                this.path[9][0].quadraticBezierTo(187, 566, 187, 631);
                this.path[9][0].quadraticBezierTo(210, 479, 187, 494);
                this.path[9][0].quadraticBezierTo(284, 463, 234, 463);
                this.path[9][0].quadraticBezierTo(358, 479, 334, 463);
                this.path[9][0].quadraticBezierTo(399, 595, 383, 495);
                this.path[9][0].quadraticBezierTo(341, 649, 363, 640);
                this.path[9][0].quadraticBezierTo(282, 658, 320, 658);
                this.path[9][1] = new Phaser.Curves.Path(0, 0);
                this.path[9][1].moveTo(265, 1012);
                this.path[9][1].quadraticBezierTo(471, 959, 405, 1012);
                this.path[9][1].quadraticBezierTo(538, 668, 538, 905);
                this.path[9][1].quadraticBezierTo(475, 399, 538, 445);
                this.path[9][1].quadraticBezierTo(281, 353, 412, 353);
                this.path[9][1].quadraticBezierTo(106, 394, 159, 353);
                this.path[9][1].quadraticBezierTo(53, 566, 53, 434);
                this.path[9][1].quadraticBezierTo(96, 731, 53, 700);
                this.path[9][1].quadraticBezierTo(250, 762, 139, 762);
                this.path[9][1].quadraticBezierTo(327, 749, 297, 762);
                this.path[9][1].quadraticBezierTo(403, 692, 357, 736);
                this.path[9][1].quadraticBezierTo(363, 868, 397, 842);
                this.path[9][1].quadraticBezierTo(252, 893, 329, 893);
                this.path[9][1].quadraticBezierTo(188, 883, 210, 893);
                this.path[9][1].quadraticBezierTo(140, 848, 166, 872);
                this.path[9][1].lineTo(62, 936);
                this.path[9][1].quadraticBezierTo(140, 994, 106, 976);
                this.path[9][1].quadraticBezierTo(265, 1012, 175, 1012);
                this.generatePoints();
                this.generateSplines();
        };

        private generatePoints(): void {

                let pathLengths: number[][];
                let totalLengths: number[];
                let numPointsPerPath: number [][];
                const TotalPoints:number=64;
                this.points = [];
                pathLengths = [];
                totalLengths = [];
                numPointsPerPath=[];
                for (var i = 0; i < this.path.length; i++) {
                        pathLengths[i] = []
                        for (var j = 0; j < this.path[i].length; j++) {
                                pathLengths[i][j] = this.path[i][j].getLength();
                        }
                }

                for (var i = 0; i < pathLengths.length; i++) {
                        totalLengths[i]=0;
                        for (var j = 0; j < this.path[i].length; j++) {
                                totalLengths[i]+=pathLengths[i][j];
                        }
                }

                for (var i = 0; i < pathLengths.length; i++) {
                        numPointsPerPath[i]=[];
                        this.points[i] = [];
                        for (var j = 0; j < this.path[i].length; j++) {
                                numPointsPerPath[i][j]=Math.round(  TotalPoints*pathLengths[i][j]/totalLengths[i]);
                                this.points[i][j] = this.path[i][j].getSpacedPoints(numPointsPerPath[i][j]);
                        }
                }


        }

        private generateSplines(): void {
                this.splines = [];
                for (var i = 0; i < this.points.length; i++) {
                        this.splines[i] = [];
                        for (var j = 0; j < this.points[i].length; j++) {
                                this.splines[i][j] = new Phaser.Curves.Spline(this.points[i][j]);
                        }
                }
        }
};
