export class ColorDict {
    private colors: {} = {};

    constructor() {
        this.addColor(1, 'class1');
        this.addColor(2, 'class2');
        this.addColor(3, 'class3');
        this.addColor(4, 'class4');
        this.addColor(5, 'class5');
        this.addColor(6, 'class6');
        this.addColor(7, 'class7');
        this.addColor(8, 'class8');
        this.addColor(9, 'class9');
        this.addColor(10, 'class10');
        this.addColor(11, 'class11');
        this.addColor(12, 'class12');
        this.addColor(13, 'class13');
        this.addColor(14, 'class14');
        this.addColor(15, 'class15');
        this.addColor(16, 'class16');
        this.addColor(17, 'class17')
        this.addColor(18, 'class18')
        this.addColor(19, 'class19')
        this.addColor(20, 'class20')
        this.addColor(21, 'class21')
        this.addColor(22, 'class22')
        this.addColor(23, 'class23')
        this.addColor(24, 'class24')
        this.addColor(25, 'class25')
        this.addColor(26, 'class26')
        this.addColor(27, 'class27')
        this.addColor(28, 'class28')
        this.addColor(29, 'class29')
        this.addColor(30, 'class30')
        this.addColor(31, 'class31')
        this.addColor(32, 'class32')
        this.addColor(33, 'class33')
        this.addColor(34, 'class34')
        this.addColor(35, 'class35')
        this.addColor(36, 'class36')
        this.addColor(37, 'class37')
        this.addColor(38, 'class38')
        this.addColor(39, 'class39')
        this.addColor(40, 'class40')
        this.addColor(41, 'class41')
        this.addColor(42, 'class42')
        this.addColor(43, 'class43')
        this.addColor(44, 'class44')
        this.addColor(45, 'class45')
        this.addColor(46, 'class46')
        this.addColor(47, 'class47')
        this.addColor(48, 'class48')
        this.addColor(49, 'class49')
        this.addColor(50, 'class50')
        this.addColor(51, 'class51')
        this.addColor(52, 'class52')
        this.addColor(53, 'class53')
        this.addColor(54, 'class54')
        this.addColor(55, 'class55')
        this.addColor(56, 'class56')
        this.addColor(57, 'class57')
        this.addColor(58, 'class58')
        this.addColor(59, 'class60')
        this.addColor(60, 'class61')
        this.addColor(62, 'class62')
        this.addColor(63, 'class63')
        this.addColor(64, 'class64')
        this.addColor(65, 'class65')
        this.addColor(66, 'class66')
        this.addColor(67, 'class67')        
    }

    addColor(id: number, color: string) {
        this.colors[id] = color;
    }

    getColor(id: number): string {
        return this.colors[id];
    }
}