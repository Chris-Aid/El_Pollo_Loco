class Coin extends movableObject {
    x = 70;
    y = 335;
    height = 120;
    width = 120;

    constructor(path) {
        super().loadImage(path);

        this.x = Math.random() * 2400;
    
    }

}