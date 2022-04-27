class chicken extends movableObject {
    height = 90;
    width = 90;
    y = 530;
    energy = 25;
    dead = false;
    gameStarted;
    gameOver;

    imagesWalking = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    imagesDead = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];


    constructor(x) {
        super().loadImage(this.imagesWalking[0]);
        this.x = x;
        this.x = 200 + Math.random() * 4000;
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
            // if (this.gameStarted && !this.gameOver) {
                setInterval(() => {
                    if (!this.dead) {
                        this.moveLeft();
                        // console.log(this.gameOver)
                    }
                }, 1000 / 60);

                setInterval(() => {
                    if (!this.dead) {
                        this.playAnimation(this.imagesWalking);
                    }
                }, 100);
            // } else {
            //     this.loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
            // }
        }, 500);
    }
}
