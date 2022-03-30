class Coin extends movableObject {
    x = 70;
    y = 335;
    height = 120;
    width = 120;

    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');

        this.x = Math.random() * 2400;
    }

}