class Endboss extends movableObject {
    height = 280;
    width = 210;
    y = 160;
    x = 2200;
    energy = 100;
    walking = true;

    // char = new Character();

    imagesWalking = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'

    ];

    imagesAlerta = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    imagesHit = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];

    imagesDead = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];

    imagesAttack = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    ];

    constructor() {
        super().loadImage(this.imagesAlerta[0]);
        this.loadImages(this.imagesAlerta);
        // this.endbossWalking();
    }

    // endbossWalking() {
    //     if (this.walking) {
    //         this.otherDirection = false;
    //         let endbossWalkingForward = setInterval(() => {
    //             if (this.x > 2200) {
    //                 this.playAnimation(this.imagesWalking);
    //                 this.x -= 11;
    //             } else if (this.x <= 2200) {
    //                 clearInterval(endbossWalkingForward);
    //                 this.endbossWalkingBackwards();
    //             }
    //         }, 150);
    //     }
    // }

    // endbossWalkingBackwards() {
    //     if (this.walking) {
    //         this.otherDirection = true;
    //         let endbossWalkingBack = setInterval(() => {
    //             if (this.x < 2700) {
    //                 this.playAnimation(this.imagesWalking);
    //                 this.x += 11;
    //             } else if (this.x == 2700) {
    //                 this.endbossWalking();
    //                 clearInterval(endbossWalkingBack);
    //             }
    //         }, 150);
    //     }
    // }

    imagesAfterHit() {

        var timesRun = 0;
        var interval = setInterval(() => {
            timesRun += 1;
            if (timesRun === 6) {
                clearInterval(interval);
            } else {
                this.playAnimation(this.imagesHit);
            }
        }, 300);
    }

    Dead() {
        setInterval(() => {
            this.playAnimation(this.imagesDead);
        }, 100);
    }

    animate() {
        this.walking = false;
        let i = 0;
        let animation = setInterval(() => {
            if (i !== this.imagesAlerta.length) {
                this.loadImage(this.imagesAlerta[i]);
                i++;
            }
        }, 600);
        clearInterval(animation);

        this.animateAttack();
    }

    animateAttack() {
        setInterval(() => {
            this.playAnimation(this.imagesAttack);
        }, 200);

    }
}