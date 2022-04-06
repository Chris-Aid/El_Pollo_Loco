class ThrowableObject extends movableObject {

    imagesBottels = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    constructor() {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = 100;
        // this.y = 100;
        this.height = 90;
        this.width = 70;
        this.loadImage

        this.throw();
    }

    throw() {
        setInterval(() => {
            this.acceleration = 10;
            this.y = 100;
            this.x += 20;
            this.applyGravity();
        }, 50);
    }
}
