class Endboss extends movableObject {
    height = 330;
    width = 260;
    y = 315;
    x = 6000;
    energy = 100;
    acceleration = 5;

    characterX;

    bossAttacks = false;
    bossGetsAttacked = false;
    dead = false;

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
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png'
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
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    ];

    // showAggression = setInterval(this.animateAttack(), 100);
    // startAttack = setInterval(this.animateAggression(), 100);

    constructor() {
        super().loadImage(this.imagesAlerta[0]);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesAlerta);
        this.loadImages(this.imagesHit);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesAttack);

        this.animateAggression();
        this.animateAttack();
    }

    // plays images of injured endboss and stops after counter reaches the number 5 (5 = number of last image)
    imagesAfterHit() {
        let count = 0;
        var imagesOfHitEndboss = setInterval(() => {
            this.playAnimation(this.imagesHit);
            if (count > 5) {
                clearInterval(imagesOfHitEndboss);
            }
            count++;
        }, 200);
    }

    Dead() {
        this.dead = true;
        setInterval(() => {
            this.playAnimation(this.imagesDead);
            this.x += 40;
            this.y -= 15;
        }, 40);
    }

    // if character comes close to endboss fucntion plays agression images
    animateAggression() {
        setInterval(() => {
            if (!this.dead && this.x - this.characterX <= 550 && !this.bossAttacks) {
                this.playAnimation(this.imagesAlerta);
            }
        }, 300);
    }

    // if character comes to close or throws a bottle, enboss attacks
    animateAttack() {
        setInterval(() => {
            if (!this.dead && this.bossAttacks) {
                this.playAnimation(this.imagesAttack);
                if (this.x - this.characterX > 10) {
                    this.x -= 20;
                }
            }
        }, 100);
    }
}