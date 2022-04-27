class Coin extends movableObject {
    x = 260;
    y = 540;
    height = 120;
    width = 120;

    constructor(path) {
        super().loadImage(path);

        this.x = Math.random() * 2400;
    
    }

}