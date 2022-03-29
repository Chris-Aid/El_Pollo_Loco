class Character extends movableObject {

    height = 290;
    width = 130;
    y = 135;
    x = 10;
    speed = 7;

    imagesWalking = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    world;
    running = new Audio('audi/running.mp3');


    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        // this.loadImages(this.imagesWalking)

        this.animate();

    }

    animate() {

        setInterval(() => {
            this.running.pause();
            if (this.world.keyboard.Right && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.running.play();
            }

            if (this.world.keyboard.Left && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.running.play();
            }
            this.world.camera_x = -this.x + 70;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.Right || this.world.keyboard.Left) {
                this.walkingAnimation();
            }
        }, 100);
    }

    moveRight() {

    }

    jump() {

    }
}