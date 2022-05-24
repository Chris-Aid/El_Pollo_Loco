class Bottle extends movableObject {
    x = 160;
    y = 540;
    height = 90;
    width = 80;

    constructor(path, positionX) {
        super().loadImage(path);
        this.x = positionX + Math.random() * 3000;
    }
}