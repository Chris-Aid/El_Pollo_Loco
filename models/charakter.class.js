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

    imagesJumping = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png',
    ];

    restImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
    ]

    world;
    running = new Audio('audi/running.mp3');


    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.restImages);

        this.animate();
        this.applyGravity();

    }

    animate() {

        setInterval(() => {
            this.running.pause();

            if (this.world.keyboard.Right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.running.play();
            }

            if (this.world.keyboard.Left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.running.play();
            }

            if (this.world.keyboard.Up && !this.isAboveGround() || this.world.keyboard.Space && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 70;
        }, 1000 / 60);

        setInterval(() => {

            if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            } else
                if (this.world.keyboard.Right || this.world.keyboard.Left) {
                    this.playAnimation(this.imagesWalking); }
                // else if 
                //     (!this.isAboveGround() && !this.world.keyboard.Right && !this.world.keyboard.Left) {     function is supposed to load rest images while resting -- function isn't working
                //         this.loadImages(this.restImages);
                // }
        }, 100);

    }



}