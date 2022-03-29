class Cloud extends movableObject {
    y = 30;
    width = 500;
    height = 350;

    constructor(imagePath, pos) {

        super().loadImage(imagePath, pos);

        this.x = pos + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }


}