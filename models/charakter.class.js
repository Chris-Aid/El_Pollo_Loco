class Character extends movableObject {

    height = 320;
    width = 160;
    y = 310;
    x = 10;
    speed = 7;
    characterIsMoving = false;

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
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png',
    ];

    sleepImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png',
    ]

    imagesHurt = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png',
    ];

    imagesDead = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png',
    ];

    world;
    running = new Audio('audi/running.mp3');
    grunt = new Audio('https://freesound.org/data/previews/420/420932_3890135-lq.mp3');
    timeNow;
    lastAction;
    gameStarted;
    gameOver;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.restImages);
        this.loadImages(this.sleepImages);


        this.animateCharacterActions();
        this.applyGravity();
    }

    animateCharacterActions() {
        // this interval animates running or jumping of character in 60fps!
        setInterval(() => {
            this.moveCharacter();
        }, 1000 / 60);


        setInterval(() => {
            this.checkIfCharacterIsMoving();
        }, 10);

        setInterval(() => {
            this.restingOrSleepingAnimation();
        }, 600);

        setInterval(() => {
            this.movingCharacterAnimations();
        }, 100);

    }

    // function is responsible for moving character on canvas if certain keys are pressed
    moveCharacter() {
        this.running.pause();

        if (this.world.keyboard.Right && this.x < 6000 && this.gameStarted && !this.gameOver) {
            this.moveRight();
            this.running.play();
        }

        if (this.world.keyboard.Left && this.x > 0 && this.gameStarted && !this.gameOver) {
            this.moveLeft();
            this.otherDirection = true;
            this.running.play();
        }

        if (this.world.keyboard.Up && !this.isAboveGround() && !this.gameOver || this.world.keyboard.Space && !this.isAboveGround() && this.gameStarted && !this.gameOver) {
            this.jump();
        }

        // responsible for moving camera with character to make Pepe the center of the game!
        this.world.camera_x = -this.x + 100;
    }

    // this interval checks wether character is moving or standing still and also figures out when the last move happened + what time it is now!
    checkIfCharacterIsMoving() {
        if (this.isAboveGround() || this.world.keyboard.Right || this.world.keyboard.Left) {
            this.lastAction = new Date().getTime();
        }

        this.timeNow = new Date().getTime();
    }

    // funciton provides suitable images for every action of the character
    movingCharacterAnimations() {
        if (this.isHurt()) {
            this.playAnimation(this.imagesHurt);
        }
        else if (this.isDead()) {
            this.loadImage(this.imagesDead[5]);
        }
        else if (this.isAboveGround()) {
            this.playAnimation(this.imagesJumping);

        } else if (this.world.keyboard.Right || this.world.keyboard.Left) {
            this.playAnimation(this.imagesWalking);
        }
    }

    // if passed time is longer than 6 seconds, character sleeps. Otherwise character stands still!
    restingOrSleepingAnimation() {
        if (!this.characterIsMoving && this.timeNow - this.lastAction > 6000) {
            this.playAnimation(this.sleepImages);
        } else {
            this.playAnimation(this.restImages);
        }
    }
}