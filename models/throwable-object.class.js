class ThrowableObject extends movableObject {

    imagesBottels = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    constructor(x, y) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
        this.height = 90;
        this.width = 70;


        this.throw();
        this.throwAnimation();
    }

    throw() {
            this.speedY = 20;
            this.applyGravity();
            setInterval(() => {
                this.x += 7;
            }, 10);
    }

    throwAnimation() {
        setInterval(() => {
            this.playAnimation(this.imagesBottels);
        }, 70);
    }
}
