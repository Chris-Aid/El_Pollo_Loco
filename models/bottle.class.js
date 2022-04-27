class Bottle extends movableObject {
    x = 160;
    y = 540;
    height = 90;
    width = 80;

    constructor(path) {
        super().loadImage(path);

        this.x = Math.random() * 2400;
    }

}