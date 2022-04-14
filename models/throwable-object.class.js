class ThrowableObject extends movableObject {

    imagesBottels = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    imagesSauce = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
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
            this.speedY = 30;
            this.applyGravity();
            setInterval(() => {
                this.x += 5;
            }, 10);
    }

    throwAnimation() {
        setInterval(() => {
            this.playAnimation(this.imagesBottels);
        }, 70);
    }
}
