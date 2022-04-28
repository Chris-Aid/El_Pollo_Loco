class smallChicken extends movableObject {

    height = 80;
    width = 80;
    y = 540;
    energy = 25;
    dead = false;

    imagesWalking = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    imagesDead = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
    ];


    constructor(x) {
        super().loadImage(this.imagesWalking[0]);
        this.x = x + Math.random() * 7000;


        this.animate();
        this.applyGravity();
    }

    Dead() {
        if (this.dead) {
            this.loadImage(this.imagesDead[0]);
        }
    }

    animate() {
        setTimeout(() => {
            setInterval(() => {
                if (!this.dead) {
                    this.moveLeft();
                }
            }, 1000 / 60);

            setInterval(() => {
                if (!this.dead) {
                this.playAnimation(this.imagesWalking);
                }
            }, 100);

            setInterval(() => {
                if (!this.dead) {
                    this.jump();
                }
            }, 1000 + Math.random() * 3000);

            setInterval(() => {
                if (!this.dead) {
                    if (this.isAboveGround()) {
                        this.speed = 7.5
                    } else {
                        this.speed = 1.5 + Math.random() * 0.25;
                    }
                }
            }, 1000 / 60);

        }, 500);
    }
}
