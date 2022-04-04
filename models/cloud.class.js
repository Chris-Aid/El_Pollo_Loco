class Cloud extends movableObject {
    y = 30;
    width = 500;
    height = 350;

    constructor(imagePath, pos) {

        super().loadImage(imagePath, pos);

        this.x = pos + Math.random() * 200;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }


}