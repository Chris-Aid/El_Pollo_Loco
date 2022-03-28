class Cloud extends movableObject {
    y = 30;
    width = 500;
    height = 350;
    speed = 0.15;

    constructor() {

        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 0 + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}