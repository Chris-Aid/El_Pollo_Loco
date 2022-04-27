class smallChicken extends movableObject {

    height = 70;
    width = 70;
    y = 550;
    energy = 25;
    dead = false;
    // gameStarted;
    // gameOver;

    imagesWalking = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    imagesDead = [
        'img\3.Secuencias_Enemy_básico\Versión_pollito\4.Muerte.png'
    ];


    constructor(x) {
        super().loadImage(this.imagesWalking[0]);
        this.x = x + Math.random() * 4000;
        this.speed = 0.4 + Math.random() * 0.25;
        this.animate();
    }

    Dead() {
        if (this.dead) {
            this.loadImage(this.imagesDead[0]);
            this.y = this.y + 10;
        }
    }

    animate() {
        setTimeout(() => {
            setInterval(() => {
                // if (!this.dead && this.gameStarted && !this.gameOver) {
                    this.moveLeft();
                // }
            }, 1000 / 60);

            setInterval(() => {
                // if (!this.dead && this.gameStarted && !this.gameOver) {
                    this.playAnimation(this.imagesWalking);
                // }
            }, 100);

        }, 500);
    }
}
